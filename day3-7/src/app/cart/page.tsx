"use client";

import Product from "@/types/product";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { getCartItems, removeFromCart, updateCart } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";





export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleChange = (id: string, quantity: number) => {
    updateCart(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleChange(id, product.stockLevel - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0).toFixed(2);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed.", "success")
        router.push("/checkout")  
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4 relative top-[120px]">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="mb-44 bg-white shadow-md rounded-lg p-4">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">

                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt="img"
                      width={500}
                      height={500}
                      className="w-16 h-16 object-cover rounded bg-gray-200"
                    />
                  )}

                  <div>
                    <h2 className="font-semibold text-lg">{item.productName}</h2>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        <FaMinus />
                      </button>
                      <span className="px-4 py-1 border rounded">
                        {item.stockLevel}
                      </span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-4">
              <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
              <button
                onClick={handleProceed}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-20">
          <p className="text-center text-gray-600">Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
