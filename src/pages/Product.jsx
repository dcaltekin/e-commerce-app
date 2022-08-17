import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProductData(response.data);
      } catch (err) {
        setProductData(null);
      } finally {
      }
    };
    getProductData();
  }, []);
  return (
    <div>
      <Navbar /> Product
      <Footer />
    </div>
  );
}

export default Product;
