import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Product = ({ item }) => {
  const {addToBasket}= useContext(StoreContext)
  const handleAdd=()=>{
    addToBasket(item)
  }
  return (
    <div className="bg-slate-900 overflow-hidden w-fit text-white rounded-md mx-auto ">
      <img src={item.image} className="object-cover" alt="" />
      <div className=" flex justify-between">
        <div className="px-3  flex-col justify-between">
          <p>{item.name}</p>
          <p className="font-semibold">${item.price}</p>
        </div>

        <button className="bg-cyan-500 px-3 mx-3 rounded-full my-3  m-auto" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
