import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Service from "./components/Service.js";
import Footer from "./components/Footer.js";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Service />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
