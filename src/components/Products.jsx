import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(data);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);

        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {loading ? (
        "Yükleniyor"
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 container justify-center items-center">
          {data.map((products, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              {products.id}
              <img
                src={products.image}
                alt={products.title}
                className="w-56 h-56"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
