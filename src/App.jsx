
import { useState } from "react";
import Carts from "./Component/Carts";
import CTA from "./Component/CTA";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Pricing from "./Component/Pricing";
import Products from "./Component/Products";
import Stats from "./Component/Stats";
import Steps from "./Component/Steps";
import CardHead from "./Component/CardHead";

const getProduct = async () => {
  const res = await fetch("/products.json");
  return res.json()
}

const productProm = getProduct()

function App() {
  const [activeTab, setActiveTab] = useState("product")
  const [carts, setCarts] = useState([])
  // console.log(carts);


  // console.log(activeTab);
  return (
    <div className="">


      <Navbar carts={carts} setActiveTab={setActiveTab}></Navbar>
      <Hero>  </Hero>
      <Stats></Stats>
      <CardHead></CardHead>

      {/* Button section */}
      <div className="relative cursor-pointer flex items-center justify-between w-64 mx-auto  rounded-full p-1 mt-5">
        <div
          className={`absolute top-1 left-1 h-10 w-1/2 rounded-full bg-linear-to-r from-purple-600 to-pink-400 
            transition-all duration-300 ease-in-out
    ${activeTab === "cart" ? "translate-x-full" : "translate-x-0"}`}
        ></div>

        {/* Product */}
        <button
          onClick={() => setActiveTab("product")}
          className={`cursor-pointer relative z-10 w-1/2 text-center py-2 rounded-full transition
             ${activeTab === "product" ? "text-white" : "text-gray-600"
            }`}
        >
          Products
        </button>

        {/* Cart */}
        <button
          onClick={() => setActiveTab("cart")}
          className={`cursor-pointer relative z-10 w-1/2 text-center py-2 rounded-full transition
             ${activeTab === "cart" ? "text-white" : "text-gray-600"
            }`}
        >
          Cart ({carts.length})
        </button>
      </div>
      {/* Button End */}

      {activeTab === "product" && <Products productProm={productProm} carts={carts} setCarts={setCarts}></Products>}
      {activeTab === "cart" && <Carts carts={carts} setCarts={setCarts}></Carts>}
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>

    </div>
  );
}

export default App;