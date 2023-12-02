import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeselectedProduct } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { useParams } from "react-router-dom";
//this functional component will get all the products using the api
function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return ()=> dispatch(removeselectedProduct())
  }, [productId]);
  // const products = useSelector((state) => state.allProducts.products);
  // const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => console.log(err));
  //   dispatch(setProducts(response.data));
  //   // console.log(products, "these are the values retreived from the server");
  // };
  // useEffect(() => {
  //   fetchProducts();
  // },[]);
  // console.log(products);
  return (
    <>
    {Object.keys(product).length===0? (<div className=" h-screen flex justify-center items-center font-bold text-7xl">Loading...</div>):(
    <div className=" pt-5 bg-white min-h-[400px] w-11/12 m-auto mt-5 rounded-lg md:flex  ">
      <div className=" md:w-1/2 text-slate-800  py-6 px-5  ">
        <p className="font-bold"> {product.title}</p>
        <div className="flex mt-5">
          <div
            className="w-0 h-0 
  border-t-[25px] border-t-transparent
  border-r-[30px] border-r-sky-700
  border-b-[25px] border-b-transparent  flex justify-center items-center align-middle"
          >
            <div className="w-0 h-0 bg-white ml-10 rounded-full  border-4"></div>
          </div>
          <div className="bg-sky-700 text-white w-fit p-3  ">
            <p className="font-bold">${product.price}</p>
          </div>
        </div>
        <div className="bg-gray-100 border  border-gray-400 w-fit mt-5 px-10 rounded-sm">
          <p>{product.category}</p>
        </div>
        <p>{product.description}</p>

        {/* {product.rating.rate} */}
      </div>
      {/* <div className=" flex items-center justify-center shadow-xl    "> */}
      <div className="bg-white flex justify-center m-auto">
        <img
          className="object-center  h-96 "
          src={product.image}
          alt={product.id}
        ></img>
      </div>
    </div>)}
    </>
  );
}

export default ProductDetail;
