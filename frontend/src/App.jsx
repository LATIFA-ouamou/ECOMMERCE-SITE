import Categories from "./components/home/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Hero from "./components/home/Hero";
import { Products } from "./components/home/Products";
import { Subscribe } from "./components/home/Subscribe";
import { Footer } from "./components/layouts/Footer";
import { Navbar } from "./components/layouts/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <Categories></Categories>
      <FeaturedProducts></FeaturedProducts>
      
      <Subscribe></Subscribe>
      <Products></Products>
      <Footer></Footer>
    </>
  );

}

export default App;