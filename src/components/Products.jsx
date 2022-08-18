import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillCartFill } from "react-icons/bs";
import "react-loading-skeleton/dist/skeleton.css";
import Loading from "./Loading";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const allCategories = [
    "All",
    ...new Set(data.map((item, index) => item.category)),
  ];

  const [menuItems, setMenuItems] = useState([]);

  const filterItems = (category) => {
    const newCategory = data.filter((item) => item.category === category);
    setMenuItems(newCategory);
    if (category === "All") {
      setMenuItems(data);
      return;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        setMenuItems(response.data);

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
        <Loading />
      ) : (
        <div>
          <div className="text-center container mx-auto mt-12" id="products">
            {allCategories.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterItems(category)}
                  id="deneme"
                  className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-white"
                >
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-black transition duration-300 group-hover:text-white ease capitalize">
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 container mx-auto mt-12">
            {menuItems.map((products, index) => (
              <div key={index}>
                <div className="flex flex-col ">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-wrap  cursor-pointer hover:scale-105 transition-all">
                      <div className="w-full  p-4 -z-50 ">
                        <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                          <a href={`product/${products.id}`}>
                            <div className="relative pb-48 overflow-hidden my-6">
                              <img
                                className="absolute inset-0 h-full w-full object-contain "
                                src={products.image}
                                alt=""
                              />
                            </div>

                            <div className="p-4">
                              <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                                Campaign
                              </span>
                              <h2 className="mt-2 mb-2  font-bold  truncate">
                                {products.title}
                              </h2>
                              <p className="text-sm truncate">
                                {products.description}
                              </p>
                              <div className="mt-3 flex items-center">
                                <span className="font-bold text-xl">
                                  {products.price}
                                </span>
                                &nbsp;
                                <span className="text-sm font-semibold">$</span>
                              </div>
                            </div>
                          </a>

                          <div className="p-4 flex items-center text-sm text-gray-600">
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 fill-current text-yellow-500"
                            >
                              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 fill-current text-yellow-500"
                            >
                              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 fill-current text-yellow-500"
                            >
                              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 fill-current text-yellow-500"
                            >
                              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 fill-current text-gray-400"
                            >
                              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <span className="ml-2">
                              {products.rating.rate} Rate in{" "}
                              {products.rating.count} vote{" "}
                            </span>
                          </div>
                          <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white  transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                            <BsFillCartFill className="text-white" />
                            <span className="mx-1">Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
