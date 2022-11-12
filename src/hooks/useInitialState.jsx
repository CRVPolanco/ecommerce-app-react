import React from "react";
import { useProducts } from "./useProducts";

function useInitialState(){

  const { actual, setActual, filtedProducts, products } = useProducts();

  const [toggleProductDetail, setToggleProductDetail] = React.useState(false);
  const [detail, setDetail] = React.useState({});

  return {
    actual,
    filtedProducts,
    products,
    toggleProductDetail,
    detail,
    setActual,
    setToggleProductDetail,
    setDetail
  }
}

export { useInitialState }
