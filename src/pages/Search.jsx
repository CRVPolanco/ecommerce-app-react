import React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { SearchResult } from "../components/SearchResult";
import { SearchInput } from "../components/SearchInput";
import { ProductList } from "../containers/ProductList";

function Search(){

  const { products } = React.useContext(AppContext);
  const { searchId } = useParams();

  const filt = products.filter(p => p.title.includes(searchId));
  const total = filt.length;

  return(
    <>
      <SearchResult total={total} id={searchId} />
      <SearchInput />
      <ProductList filtedProducts={filt} />
    </>
  )
}

export { Search }
