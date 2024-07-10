import { Pagination, Rating } from "flowbite-react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        console.log("Unable to fetch products");
        return;
      }

      const data = await response.json();

      setProducts(data);
    };
    fetchData();
  }, []);

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  if (!products.length) {
    console.log("No products found");
    return;
  }
  console;
  const filteredProducts = products.filter((product: TCard) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + perPage
  );
  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="page-padding w-full flex justify-end mt-6">
        <div>
          <form className="flex items-center max-w-sm mx-auto">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="!pl-3 bg-gray-50 border border-gray-300 text-text2 dark:text-text focus:!ring-text2 focus:!border-text2 text-sm rounded-lg ring-text2 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-text dark:focus:ring-text dark:focus:border-text"
                placeholder="What are you looking for ?"
                required
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="page-padding my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((item: TCard) => {
          return (
            <div
              key={item.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
            >
              <a href="#">
                <div className="flex justify-center p-6">
                  <img
                    className="rounded-lg h-48 "
                    src={item.image}
                    alt="product"
                  />
                </div>
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-text2 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-text1 dark:text-gray-400 h-24 overflow-auto">
                  {item.description}
                </p>
                <p className="mb-3 font-medium text-text2 uppercase dark:text-gray-400">
                  {item.category}
                </p>
                <p className="mb-3 text-lg font-bold text-text2 dark:text-gray-400">
                  ${item.price}
                </p>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-sm font-bold text-text2 dark:text-white">
                    {item.rating.rate}
                  </p>
                </Rating>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex overflow-x-auto sm:justify-center mb-6">
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </>
  );
};

export default Card;
