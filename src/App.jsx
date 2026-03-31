import CTA from "./Component/CTA";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Pricing from "./Component/Pricing";
import Products from "./Component/Products";
import Stats from "./Component/Stats";
import Steps from "./Component/Steps";

const getProduct = async () => {
  const res = await fetch("/products.json");
  return res.json()
}

const productProm = getProduct()

function App() {
  return (
    <div className="">


      <Navbar></Navbar>
      <Hero>  </Hero>
      <Stats></Stats>
      <Products productProm={productProm}></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>

    </div>
  );
}

export default App;