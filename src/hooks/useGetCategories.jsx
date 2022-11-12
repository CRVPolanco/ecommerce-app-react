import React from "react";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/categories?limit=5";

function useGetCategories(){

  const [ category, setCategory ] = React.useState([]);

  const getCategory = async() => {
    const response = await axios(API);
    const data = await response.data;

    setCategory([...data]);
  }

  React.useEffect(() => {
    getCategory();
  }, [])

  return { category }
}

export { useGetCategories };
