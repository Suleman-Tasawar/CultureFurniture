import React, { useEffect, useState } from "react";
import ProdShow from "../components/ProdShow";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { type } = useParams();
  const cleanedType = type.replace(":", "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category] = useState(cleanedType);

  useEffect(() => {
    fetch(`/api/${cleanedType}`)
      .then((res) => res.json())
      .then((data) => {
        // checking the value of the useParam hook
        if (cleanedType === "sofas") {
          setProducts(data.sofas);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        } else if (cleanedType === "beds") {
          setProducts(data.beds);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        } else if (cleanedType === "tables") {
          setProducts(data.tables);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        } else if (cleanedType === "closets") {
          setProducts(data.closets);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        } else if (cleanedType === "racks") {
          setProducts(data.racks);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        } else {
          throw Error("Cant find the thing you are looking for");
        }
      });
  }, [cleanedType]);

  const showProducts = products.map((product) => (
    <ProdShow
      key={product.id}
      category={category}
      ProdId={product.id}
      ProdImg={product.imgUrl}
      ProdTitle={product.name}
      ProdPrice={product.itemPrice}
    />
  ));

  return (
    <main
      className="min-h-screen p-5 bg-primary mx-auto
     grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 place-items-center gap-4"
    >
      {loading ? (
        showProducts
      ) : (
        <h1 className="text-3xl font-serif font-bold text-white text-center">
          Please wait we are loading your data 😊
        </h1>
      )}
    </main>
  );
}

export default ProductPage;
