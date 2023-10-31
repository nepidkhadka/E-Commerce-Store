import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                src="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Shop Today</h2>

              <p className="mt-4 text-gray-600">
                Get Best Products For Your Home and Family.
              </p>

              <Link
                to="/products"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-xl text-center my-8 font-bold text-gray-900 sm:text-3xl">
          Featured Products
        </h2>
        {/* <Products value="10" /> */}
        
      </section>
    </>
  );
};

export default Home;
