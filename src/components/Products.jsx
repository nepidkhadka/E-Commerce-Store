import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState();

  const fetchData = async () => {
    try {
      let res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setproduct(res.data);
    } catch (err) {
      seterror(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <div
          role="alert"
          class="rounded border-s-4 border-red-500 bg-red-50 p-4"
        >
          <div class="flex items-center gap-2 text-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
            </svg>

            <strong class="block font-medium">{error.code}</strong>
          </div>

          <p class="mt-2 text-sm text-red-700">{error.message}</p>
        </div>
      ) : (
        <div className="container p-8 m-auto">
          <div className="flex justify-between flex-wrap gap-4 ">
            {product.slice(0, 40).map((product) => (
              <a href="#" class="group relative block overflow-hidden">
                <img
                  src={product.images}
                  alt=""
                  class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div class="relative border-2 border-gray-100 bg-white p-6">
                  <h3 class="mt-4 text-lg font-medium text-gray-900">
                    {product.title}
                  </h3>

                  <p class="mt-1.5 text-sm text-gray-700">
                    Rs. {product.price}
                  </p>

                  <form class="mt-4">
                    <button class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                      Add to Cart
                    </button>
                  </form>
                </div>
                <div>
                  <h1>{product.title || <Skeleton />}</h1>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
