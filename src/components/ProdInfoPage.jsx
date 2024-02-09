import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoppingContext } from "../ShoppingContex";
import Loader from "./Loader";
import Navigate from "./Navigate";
import Like from "/assets/like.svg";

function ProdInfoPage() {
  const [itemsCount, setItemsCount] = useState(0);
  const [product, setProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(ShoppingContext);
  const { id, category } = useParams();
  const prodId = id.replace(":", "");
  const ProdCategory = category.replace(":", "");

  function decreaseCount() {
    setItemsCount((pItem) => pItem - 1);
  }
  function incresseCount() {
    setItemsCount((pItem) => pItem + 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();
        const filteredProd = data[ProdCategory].find(
          (prod) => prod.id === prodId
        );
        setProduct(filteredProd);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderColor = product?.colors.map((color) => (
    <li key={color} className={`ml-3 w-5 h-5 rounded-full bg-${color}`}></li>
  ));

  function handleAddToCart() {
    setSelectedProduct(product);
    addToCart(selectedProduct);
  }

  return (
    <section className="bg-primary lg:h-[100vh] md:auto sm:auto">
      <header>
        <Navigate />
      </header>
      {product && loading ? (
        <main
          className="mx-auto w-[90%] h-auto  border-[1px] rounded-lg flex
           lg:flex-row md:flex-col sm:flex-col lg:justify-evenly
            md:justify-center sm:justify-center sm:mx-auto sm:place-items-center align-middle  bg-green-neutral
            md:text-center sm:text-center lg:text-left p-5 mt-3 font-serif"
        >
          <div>
            <img
              className="w-[300px] rounded-md"
              src={product.imgUrl}
              alt="hdfhd"
            />
          </div>
          <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] pt-5 flex flex-col justify-center align-middle ">
            <div className="flex justify-evenly align-middle">
              <h2 className="text-show-brown font-serif text-2xl font-bold">
                {product.name}
              </h2>
              <div className="mt-2">
                <button>
                  <img src={Like} alt="Likes for products" />
                </button>
              </div>
            </div>
            <h1 className="flex text-3xl font-serif text-white">
              {product.itemPrice}
              <span>
                <h2
                  className="line-through text-xl ml-3 mt-3
                "
                >
                  {product.discPrice}
                </h2>
              </span>
            </h1>
            <p className="text-dark-brown mt-3">{product.details}</p>
            <div>
              <div className="mt-5 flex justify-center align-middle">
                <h4 className="text-dark-brown font-serif font-bold">COLORS</h4>
                <ul className="flex justify-evenly">{renderColor}</ul>
              </div>
              <div className="flex justify-evenly align-middle mt-10">
                <div className="p-2 flex flex-row-reverse justify-evenly w-22 h-10 border-dark-brown border-[1px]  rounded-lg">
                  <button
                    onClick={incresseCount}
                    className="w-5 h-5 text-dark-brown border-dark-brown  border-[1px] outline-none rounded"
                  >
                    +
                  </button>
                  <div className="text-dark-brown ml-1 mr-1">
                    {itemsCount > 0 ? itemsCount : 0}
                  </div>
                  <button
                    onClick={decreaseCount}
                    className="w-5 h-5 text-dark-brown border-dark-brown border-[1px] outline-none rounded"
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleAddToCart}
                    className="w-[150px] h-10 bg-white text-brown rounded-lg text-dark-brown hover:bg-dark-brown hover:text-white transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <h1 className="text-3xl font-serif font-bold text-white text-center">
          <Loader />
        </h1>
      )}
    </section>
  );
}

export default ProdInfoPage;
