import { Rating } from "flowbite-react";
import { useEffect, useState } from "react";

type TCard = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
  };
};

const Card = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      console.log("Unable to fetch products");
      return;
    }

    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  });

  if (!products.length) {
    console.log("No products found");
    return;
  }
  return (
    <div className="page-padding my-12 grid grid-cols-4 gap-6">
      {products.map((item: TCard) => {
        return (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
          >
            <a href="#">
              <div className="flex justify-center p-6">
                <img className="rounded-lg h-48 " src={item.image} alt="" />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.category}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${item.price}
              </p>
              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {item.rating.rate}
                </p>
              </Rating>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
