import Link from "next/link";

export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
      <main className="max-w-6xl mx-auto p-10 text-white text-center border rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
        <div className="mb-10 mt-40">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully sent</h2>
  
          <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
            ${amount}
          </div>
          <Link href="/">
          <div className="mt-10 text-white hover:text-red-600 underline">
          Back to home
         </div>
            </Link>
        </div>
      </main>
    );
  }