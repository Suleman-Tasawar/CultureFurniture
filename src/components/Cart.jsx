import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function Cart() {
  const { selectedProduct, setSelectedProduct } = useContext(MyContext);

  console.log(selectedProduct);

  return (
    <div className="absolute top-10 right-0 bg-white text-black w-[200px] h-[100%]">
      {selectedProduct ? (
        <h1>{selectedProduct[0].name}</h1>
      ) : (
        <h3>No Item in the cart</h3>
      )}
    </div>
  );
}

export default Cart;
