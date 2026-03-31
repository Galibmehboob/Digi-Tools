
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
  console.log(carts);


  // console.log(activeTab);
  return (
    <div className="">


      <Navbar></Navbar>
      <Hero>  </Hero>
      <Stats></Stats>
      <CardHead></CardHead>
      <div className="tabs tabs-box bg-transparent flex items-center justify-center mt-5">
        <input onClick={() => setActiveTab("product")} type="radio" name="my_tabs_1" className="tab text-white bg-linear-to-r from-purple-600 to-pink-400 w-30 rounded-full" aria-label="Product's" defaultChecked />
        <input onClick={() => setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab w-30 rounded-full" aria-label="Cart" />
      </div>
      {activeTab === "product" && <Products productProm={productProm} carts={carts} setCarts={setCarts}></Products>}
      {activeTab === "cart" && <Carts carts={carts}></Carts>}
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>

    </div>
  );
}

export default App;