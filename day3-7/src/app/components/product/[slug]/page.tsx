import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Images from "../../Logo";
import { notFound } from "next/navigation";
import React from "react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({params}:ProductPageProps): Promise<React.ReactElement> {
    const { slug } =  await params;

 const productQuery = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName, 
      image,
      price,
      discountPercentage,
      stockLevel,
      isFeaturedProduct,
      description,
    }`;
    
const product = await client.fetch(productQuery, { slug });

if (!product) {
        return notFound(); // Handle missing products with a 404 page
      }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative top-16 md:top-32 h-[900px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image)?.url()}
              alt={product.productName}
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-md border"
            />
          )}
        </div>
        <div className="flex flex-col gap-6 mt-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-lato w-[400px] h-[50px] leading-snug">
            {product.productName}
          </h1>

          <p className="text-xl sm:text-2xl font-lato text-black mt-8">
            Price: <span className="text-pink-600">${product.price}</span>
          </p>

          {product.discountPercentage && product.discountPercentage > 0 && (
            <p className="text-xl sm:text-2xl font-lato text-black">
              Discount: <span className="text-pink-600">{product.discountPercentage}%</span>
            </p>
          )}

          {product.stockLevel && (
            <p className="text-xl sm:text-2xl font-lato text-black">
              Stock Level: <span className="text-pink-600">{product.stockLevel}</span>
            </p>
          )}

          {product.description && (
            <p className="text-base sm:text-lg font-lato text-black">
              Description: <span className="text-pink-600">{product.description}</span>
            </p>
          )}

          {product.isFeaturedProduct && (
            <p className="text-base sm:text-lg font-lato text-black">
              Featured Product: <span className="text-pink-600">{product.isFeaturedProduct.toString()}</span>
            </p>
          )}

          <button className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-6">
        <Images />
      </div>
    </div>
  );
}
