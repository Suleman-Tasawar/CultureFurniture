import React, { useEffect, useState } from "react";
import ProdShow from "../components/ProdShow";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const { type } = useParams();
  const cleanedType = type.replace(":", "");

  useEffect(() => {
    fetch(`/api/${cleanedType}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // checking the value of the useParam hook
        if (cleanedType === "sofas") {
          setProducts(data.sofas);
        }
        if (cleanedType === "beds") {
          setProducts(data.beds);
        }
      });
  }, [cleanedType]);

  const showProducts = products.map((product) => (
    <ProdShow
      key={product.id}
      ProdImg={product.imgUrl}
      ProdTitle={product.name}
      ProdPrice={product.itemPrice}
    />
  ));

  return (
    <main
      className=" min-h-screen flex lg:flex-row md:flex-col sm:flex-col 
    lg:justify-evenly md:justify-center sm:justify-center align-middle p-5
     bg-primary mx-auto"
    >
      {showProducts}
    </main>
  );
}

export default ProductPage;
