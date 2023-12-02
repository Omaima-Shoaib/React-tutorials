import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    return (
      <div className="bg-white rounded-md border border-slate-400 flex-col justify-center items-center p-5 text-slate-900">
          <Link to={`/product/${product.id}`}>
          <img
            className="object-center h-60 m-auto "
            src={product.image}
            alt={product.title}
          ></img>
          <div className="flex justify-between">
            <p className="truncate pr-5">{product.title}</p>
            <p className="font-bold">${product.price}</p>
          </div>
      </Link>
        </div>
    );
  });
  return <div className="p-5 grid grid-cols-4 gap-4">{renderList}</div>;
}

export default ProductComponent;
