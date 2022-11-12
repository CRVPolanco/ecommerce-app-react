import React from "react";
import axios from 'axios';

const API = "https://api.escuelajs.co/api/v1/products";

function useGetProducts(){

  const [products, setProducts] = React.useState([]);

  const getProducts = async() => {
    const response = await axios(API);
    const data = await response.data;
    setProducts(data)
  }

  React.useEffect(() => {
    getProducts();
  }, [])

  return { products }
}

export { useGetProducts }
