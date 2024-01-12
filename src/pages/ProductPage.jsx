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
        // checking the value of the useParam hook
        if (cleanedType === "sofas") {
          setProducts(data.sofas);
        }
        if (cleanedType === "beds") {
          setProducts(data.beds);
        }
        if (cleanedType === "tables") {
          setProducts(data.tables);
        }

        if (cleanedType === "closets") {
          setProducts(data.closets);
        }

        if (cleanedType === "racks") {
          setProducts(data.racks);
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
      className="min-h-screen p-5 bg-primary mx-auto
     grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center gap-4"
    >
      {showProducts}
    </main>
  );
}

export default ProductPage;
