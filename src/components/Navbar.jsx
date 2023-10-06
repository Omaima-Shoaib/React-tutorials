import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context-and-reducer/StoreContext";
const Navbar = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="flex  justify-end gap-10 px-2 py-2 bg-slate-900 text-white">
      <Link className="hover:text-cyan-500 transition duration-300 " to="/">
        HOME
      </Link>
      <Link
        className=" transition duration-300 "
        to="/basket"
      >
        <span className="hover:text-cyan-500">BASKET</span>
        <span className="rounded-full px-1  align-top ml-1 text-xs  bg-cyan-300">
          {products.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
