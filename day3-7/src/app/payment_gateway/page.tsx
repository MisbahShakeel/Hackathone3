'use client';


import converToSubCurrency from "../lib/convertToSubCurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../components/CheckoutPage";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {

 const [ amount, setAmount ] = useState(2);
 const [ userName, setUserName ] = useState('user');

 useEffect(() => {
  const fetchOrder = async () => {
    try {
      const query = groq`*[_type == 'order'][0] {total, firstName, lastName}`
      const result = await client.fetch(query);
      console.log("Sanity data", result);
      
      if (result?.total) {
        setAmount(result.total);
      }
      if (result?.firstName) {
        setUserName(`${result.firstName} ${result.lastName}`.trim());
      }
    } catch (error) {
      console.log("Error fetching order", error);
      
    }
    
  };

  fetchOrder();
 }, []);

  

  return (
    <div className="max-w-6xl mx-auto p-10 text-white text-center border  rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
    <div className="mt-36 ">
      <h1 className="text-4xl font-extrabold mb-2">{userName}</h1>
      <h2 className="text-2xl">has requested
      <span className="font-bold"> ${amount}</span>
      </h2>
      
    </div>

   <Elements 
   stripe={stripePromise}
   options={{
    mode: 'payment',
    amount: converToSubCurrency(amount),
    currency: 'usd',
   }}>
    <CheckoutPage amount={amount}/>
   </Elements>
    </div>
  )
}

export default Payment