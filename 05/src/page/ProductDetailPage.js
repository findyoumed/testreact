import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log("params is", { id });

  return <h2>ProductDetailPage {id}</h2>;
};

export default ProductDetailPage;
