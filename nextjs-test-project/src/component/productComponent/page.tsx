"use client";

import { IProduct } from "@/types/productType";
import Image from "next/image";

export default function ProductCard({ product }: {product:IProduct}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Product Image */}
      <div className="relative w-full h-52">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Name & Category */}
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>

        {/* Price & Stock */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-purple-700">
            {product.currency} {product.price}
          </p>
          <span
            className={`text-sm px-2 py-1 rounded ${
              product.inStock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.inStock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm text-yellow-600">
          ⭐ {product.rating} ({product.reviewsCount} reviews)
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
