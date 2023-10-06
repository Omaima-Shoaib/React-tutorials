import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";
import BasketProduct from "../components/BasketProduct";

const Basket = () => {
  const { total, products } = useContext(StoreContext);
  return (
    <div>
    <div className="flex flex-col items-center">
    <h1 className="font-semibold text-xl text-cyan-950">Your Basket</h1>
      <p className="text-gray-700">your total: {total.toFixed(2)}</p>
    </div>
      <div className="flex flex-col  m-auto w-4/5  md:w-full  py-3 md:grid grid-cols-3 gap-4 px-5">
        {products.map((item, i) => (
          <BasketProduct item={item} key={i}></BasketProduct>
        ))}
      </div>
    </div>
  );
};

export default Basket;
