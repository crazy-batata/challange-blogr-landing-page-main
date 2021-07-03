import BetterHeader from "./components/parts/Header";
import Illustration from "./components/parts/Illustration";
import BetterPhones from "./components/parts/Phones";
import BetterLaptop from "./components/parts/Laptop";
import BetterFooter from "./components/parts/Footer";
/*
import Header from "./components/parts/Header";
import Mangment from "./components/parts/Mangment";
import Phones from "./components/parts/Phones";
import Laptop from "./components/parts/Laptop";
import Footer from "./components/parts/Footer";
*/
import { useLayoutEffect , useState} from "react"
function App() {



  return (
    <>
    
      <BetterHeader/>
      <Illustration />
      <BetterPhones />
      <BetterLaptop />

      <BetterFooter />
    </>
  );
}

export default App;
/*
  <Header/>
  <Mangment />
      <Phones />
      <Laptop />
      <Footer />


*/
