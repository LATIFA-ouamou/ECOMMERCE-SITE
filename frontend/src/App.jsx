import Categories from "./components/home/Categories";
import Hero from "./components/home/Hero";
import { Navbar } from "./components/layouts/Navbar";



function App() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <Categories></Categories>
    </>
  );
}

export default App;