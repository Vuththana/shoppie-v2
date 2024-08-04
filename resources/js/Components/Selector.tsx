import React, { PropsWithChildren, useEffect, useState } from "react";


const ChevronDownIcon = ({children}: PropsWithChildren) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );

const Selector = () => {
  const [categories, setCategories] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories')
    .then((response) => response.json())
    .then(res => setCategories(res.data))
    .catch(err => setError(err))
}, [])
  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-transparent w-full p-2 flex items-center justify-between ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "All Categories"}
        <ChevronDownIcon  />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
         
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search Categories"
            className="placeholder:text-gray-700 p-2 outline-none rounded"
          />
        </div>
        {categories?.map((category) => (
          <li
            key={category?.category_name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              category?.category_name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              category?.category_name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (category?.category_name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(category?.category_name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {category?.category_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;