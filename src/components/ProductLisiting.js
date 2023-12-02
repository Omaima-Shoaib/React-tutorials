import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from './ProductDetail'
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import ProductComponent from './ProductComponent';
function ProductLisiting() {
    // const products=useSelector((state)=>state.allProducts.products)
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.log(err));
      dispatch(setProducts(response.data));
      // console.log(products, "these are the values retreived from the server");
    };
    useEffect(() => {
      fetchProducts();
    },[]);
  return (
    <div><ProductComponent></ProductComponent></div>
  )
}

export default ProductLisiting