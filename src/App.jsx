import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import BookTable from "./components/BookTable/BookTable";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PopularFood from "./components/PopularFood/PopularFood";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <Nav/>
      <Banner/>
      <About/>
      <PopularFood/>
      <BookTable/>
      <CustomerReview/>
      <Footer/>
    </>
  );
}

export default App;
