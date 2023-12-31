import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../Store/cartSlice";

const Product = () => {
  const [product, setproduct] = useState();
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setproduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setloading(false);
    }, 500);
  }, []);

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex mt-10 px-5 ">
        <ol className="inline-flex overflow-hidden rounded-lg border mx-auto border-gray-200 text-gray-600">
          <li className="flex items-center">
            <Link
              to="/"
              className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span className="ms-1.5 text-xs font-medium"> Home </span>
            </Link>
          </li>

          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

            <Link
              to="/products"
              className="flex h-10 items-center bg-gray-100 pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
            >
              Products
            </Link>
          </li>

          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

            <Link
              to={`/product/${product ? product.id : ""}`}
              className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
            >
              Product
            </Link>
          </li>
        </ol>
      </nav>

      {loading ? (
        <div className="absolute left-2/4 top-1/2">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid text-teal-600 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="container px-5 py-24" style={{ cursor: "auto" }}>
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="sm:w-1/3 w-4/5 object-cover object-center rounded"
                src={product ? product.images[0]: ""}
                style={{ cursor: "auto" }}
              />
              <div
                className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                style={{ cursor: "auto" }}
              >
                <h2
                  className="text-sm title-font text-gray-500 tracking-widest"
                  style={{ cursor: "auto" }}
                >
                  ON SALE
                </h2>
                <h1
                  className="text-gray-900 text-3xl title-font font-medium mb-1"
                  style={{ cursor: "auto" }}
                >
                  {product ? product.title : ""}
                </h1>
                <p className="leading-relaxed">
                  {product ? product.description : ""}
                </p>
                <div className="mt-16 flex flex-wrap justify-between">
                  <span className="title-font font-semibold text-3xl text-gray-900">
                    $ {product ? product.price : ""}
                  </span>
                  {!state.find(
                    (stateproduct) => stateproduct.id === product.id
                  ) && (
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.images[1],
                          })
                        );
                      }}
                      className="ml-auto mr-2 flex text-white border-0 py-2 px-6 focus:outline-none bg-yellow-400 hover:bg-yellow-500 rounded"
                    >
                      Add To Cart
                    </button>
                  )}
                  {state.find(
                    (stateproduct) => stateproduct.id === product.id
                  ) && (
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(product.id));
                      }}
                      className="ml-auto mr-2 flex text-white border-0 py-2 px-6 focus:outline-none bg-red-500 hover:bg-red-600 rounded"
                    >
                      Remove From Cart
                    </button>
                  )}
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500  sm:ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
