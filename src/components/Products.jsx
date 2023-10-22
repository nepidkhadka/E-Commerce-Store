import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState();
  const [loading, setloading] = useState(true);

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
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  console.log(loading);

  return (
    <>
      {loading ? (
        <div className="container p-8 m-auto">
          <div className="flex justify-center items-center flex-wrap gap-4 ">
            {Array.from({ length: 20 }).map((_, index) => (
              <div className="group relative block overflow-hidden">
              <Skeleton height={288} width={288} count={1} />
              <div className="relative border-2 border-gray-100 bg-white p-4">

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                <Skeleton height={28} width={236} count={1} />
              </h3>
              <p className="mt-1.5 text-sm text-gray-700">
                <Skeleton height={20} width={236} count={1} />
              </p>
              <SkeletonTheme color="#202020" highlightColor="#facc15">
                <Skeleton height={54} width={236} count={1} />
              </SkeletonTheme>
            </div>
            </div>

            ))}
            
          </div>
        </div>
      ) : (
        <div className="container p-8 m-auto">
          <div className="flex justify-center items-center flex-wrap gap-4 ">
            {product.slice(0, 40).map((product) => (
              <Link
                to={`${product.id}`}
                className="group relative block overflow-hidden"
              >
                <img
                  src={product.images}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border-2 border-gray-100 bg-white p-6">
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {product.title}
                  </h3>

                  <p className="mt-1.5 text-sm text-gray-700">
                    Rs. {product.price}
                  </p>

                  <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
