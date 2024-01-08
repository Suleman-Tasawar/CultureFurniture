import React, { useEffect, useState } from "react";
import ProdShow from "../components/ProdShow";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [sofas, setSofas] = useState([]);

  const { type } = useParams();

  useEffect(() => {
    fetch(`/api/${type}`)
      .then((res) => res.json())
      .then((data) => setSofas(data.sofas));
  }, []);

  const showProducts = sofas.map((products) => (
    <ProdShow
      key={products.id}
      ProdImg={products.imgUrl}
      ProdTitle={products.name}
      ProdPrice={products.itemPrice}
    />
  ));

  return (
    <main className="min-h-screen flex justify-between align-middle p-5 bg-green-neutral">
      {showProducts}
    </main>
  );
}

export default ProductPage;
