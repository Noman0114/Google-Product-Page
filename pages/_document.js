import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Accordians from "@/components/Accordians";
import Product from "@/components/Products/Product";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
    
 <Navbar/>
    <Product/>
      
        <Main />
        <NextScript />
        <Accordians/>
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </body>
    </Html>
  );
}
