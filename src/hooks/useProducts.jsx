import React from "react";
import { useGetProducts } from "./useGetProducts";

function useProducts(){

  const [actual, setActual] = React.useState('');

  const { products } = useGetProducts();

  let filtedProducts = [];

  if(!actual.length >= 1){
    filtedProducts = products;
  }else{
    filtedProducts = products.filter(p => {
      const elementLow = p.category.name.toLowerCase();
      const searchLower = actual.toLowerCase();
      return elementLow.includes(searchLower);
    })
  }

  const sumTotal = (payload) => {
    const reducer = (accumulator, current) => accumulator + current.price;
    const sum = payload.reduce(reducer, 0);
    return sum;
  }

  return { actual, setActual, filtedProducts, products, sumTotal }
}

export { useProducts }
