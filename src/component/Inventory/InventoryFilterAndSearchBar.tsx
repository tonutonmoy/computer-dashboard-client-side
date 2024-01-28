import { useEffect, useState } from "react";
import { useGetInventoryQuery } from "../../redux/features/inventoryApi/inventoryApi";
import { setInventoryData } from "../../redux/features/inventoryApi/inventorySlice";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const InventoryFilterAndSearchBar = () => {
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const [capacity, setCapacity] = useState("");
  const [color, setColor] = useState("");
  const [compatibilityAndBrand, setCompatibilityAndBrand] = useState("");
  const [interfaceValue, setInterfaceValue] = useState("");
  const [condition, setCondition] = useState("");

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };
  type MyObjectType = {
    price: string;
    category: string;
    capacity: string;
    color: string;
    compatibilityAndBrand: string;
    condition: string;
    interfaceValue: string;
  };

  const myObject: MyObjectType = {
    price: price.toString(),
    category: category,
    capacity: capacity,
    color: color,
    compatibilityAndBrand: compatibilityAndBrand,
    condition: condition,
    interfaceValue: interfaceValue,
  };

  const queryString = new URLSearchParams(myObject).toString();
  const { data } = useGetInventoryQuery(queryString);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInventoryData(data));
  }, [data]);

  console.log(data);

  if (data?.errorMessage === "Unauthorized") {
    dispatch(logout());
    window.location.reload();
  }
  return (
    <div className=" mb-20 mt-10">
      <div className="w-[100%]">
        <div className="flex flex-col">
          <div className="rounded-xl border border-gray-200  bg-white p-6 shadow-lg">
            <form className="">
              <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  onChange={(e) => setCompatibilityAndBrand(e.target.value)}
                  className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by name, type, manufacturer, etc"
                />
              </div>

              <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* Category start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Category
                  </label>

                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>Monitor</option>
                    <option>RAM</option>
                    <option>Graphics card</option>
                  </select>
                </div>
                {/* Category end */}

                {/* Interface start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Interface
                  </label>

                  <select
                    onChange={(e) => setInterfaceValue(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>USB</option>
                    <option>HDMI</option>
                    <option>Thunderbolt</option>
                  </select>
                </div>
                {/* Interface end */}

                {/* Condition start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Condition
                  </label>

                  <select
                    onChange={(e) => setCondition(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>New</option>
                    <option>Used</option>
                  </select>
                </div>
                {/* Condition end */}

                {/* Capacity start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Capacity
                  </label>

                  <select
                    onChange={(e) => setCapacity(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>22inch</option>
                    <option>32inch</option>
                    <option>52inch</option>
                    <option>1GB</option>

                    <option>16GB</option>
                    <option>32GB</option>
                    <option>64GB</option>
                    <option>250GB</option>
                    <option>500GB</option>
                    <option>1TB</option>
                    <option>2TB</option>
                    <option>5TB</option>
                  </select>
                </div>
                {/* Capacity end */}

                {/* Color start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Color
                  </label>

                  <select
                    onChange={(e) => setColor(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>Black</option>
                    <option>White</option>
                    <option>Red</option>
                  </select>
                </div>
                {/* Color end */}

                {/* Price end */}
                <div>
                  <label
                    htmlFor="default-range"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <div className="flex justify-between">
                      <p>Price</p>
                      <p>{price}</p>
                    </div>
                  </label>
                  <input
                    id="default-range"
                    type="range"
                    min={0}
                    max={1000}
                    value={price}
                    onChange={handleRangeChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
                {/* Price end */}
              </section>

              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button className="rounded-lg bg-red-500 text-white px-8 py-2 font-medium  outline-none hover:opacity-80 focus:ring">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryFilterAndSearchBar;
