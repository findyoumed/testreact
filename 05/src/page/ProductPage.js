import React from "react";
import { useSearchParams } from "react-router-dom";

const Productpage = () => {
  let [query, setQuery] = useSearchParams();
  console.log("serach params is "+`"${query.get("q")}"`);
  return <h1>Show all products!!</h1>;
};

export default Productpage;
