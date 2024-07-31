import AddProductForm from "@/forms/addProduct";
import { CustomFlowbiteTheme, Modal, Pagination, Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

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

const customTheme: CustomFlowbiteTheme["pagination"] = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-white dark:text-white",
      span: "font-semibold text-gray-900 dark:text-white",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-text2 dark:border-text2 dark:bg-text2 dark:text-white enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-text2 dark:border-gray-700 dark:bg-text2 dark:text-white enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    selector: {
      base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-text2 dark:border-text2 dark:bg-text2 dark:text-white enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active:
        "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-text2 dark:bg-text2 dark:text-text2",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};

const Card = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const [search, setSearch] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);

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

  const handleDelete = async (id: number) => {
    const deleteApi = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    if (deleteApi.ok) {
      console.log(`Successfully delete id: ${id}`);
    } else {
      console.log("Failed to delete item");
    }
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
                className="!pl-3 bg-gray-50 border border-gray-300 text-text2 dark:text-text focus:!ring-text2 focus:!border-text2 text-sm rounded-lg ring-text2 block w-full ps-10 p-2.5  dark:bg-text2 dark:border-textbg-text2 dark:placeholder-text dark:focus:ring-text dark:focus:border-text"
                placeholder="What are you looking for ?"
                required
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="page-padding my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
        {paginatedProducts.map((item: TCard) => {
          return (
            <div
              key={item.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-primary1 dark:border-primary1 "
            >
              <div className="flex justify-end m-4 text-secondary2 cursor-pointer">
                <FaEdit onClick={() => setOpenEditModal(true)} />
              </div>

              <div className="flex justify-end m-4 text-secondary2 cursor-pointer">
                <AiFillDelete onClick={() => handleDelete(item.id)} />
              </div>

              <div className="flex justify-center p-6">
                <img
                  className="rounded-lg h-48 "
                  src={item.image}
                  alt="product"
                />
              </div>

              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-text2 dark:text-white">
                  {item.title}
                </h5>

                <p className="mb-3 font-normal text-text1 dark:text-white h-24 overflow-auto">
                  {item.description}
                </p>
                <p className="mb-3 font-medium text-text2 uppercase dark:text-white">
                  {item.category}
                </p>
                <p className="mb-3 text-lg font-bold text-text2 dark:text-white">
                  ${item.price}
                </p>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-sm font-bold text-text2 dark:text-white">
                    {item.rating.rate}
                  </p>
                </Rating>
              </div>

              <Modal
                show={openEditModal}
                onClose={() => setOpenEditModal(false)}
                className="!bg-opacity-50"
              >
                <Modal.Header>Update store item</Modal.Header>
                <Modal.Body>
                  <AddProductForm
                    id={String(item.id)}
                    title={item.title}
                    price={String(item.price)}
                    description={item.description}
                    image={item.image}
                    category={item.category}
                  />
                </Modal.Body>
              </Modal>
            </div>
          );
        })}
      </div>

      <div className="flex overflow-x-auto sm:justify-center mb-6">
        <Pagination
          theme={customTheme}
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
