"use client";
import { useState } from "react";

const Form = ({ addItem }) => {
  const [item, setItem] = useState("");
  const [quan, setQuan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() && quan.trim()) {
      addItem({ name: item, quantity: quan });
      setItem("");
      setQuan("");
    }
  };

  return (
    <form
      className="text-center flex flex-col gap-6 mt-20"
      onSubmit={handleSubmit}
    >
      <h1 className="font-semibold text-2xl">My College Supply List</h1>
      <div className="flex gap-10">
        <div className="flex flex-col">
          <label htmlFor="item">Item</label>
          <input
            type="text"
            id="item"
            autoComplete="off"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quan" autoComplete="off">
            Quantity
          </label>
          <input
            type="number"
            min={0}
            id="quan"
            value={quan}
            onChange={(e) => {
              setQuan(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="border-solid border-grey bg-slate-100 px-4 py-2 text-sm rounded-md hover:bg-slate-200"
      >
        Add Item
      </button>
    </form>
  );
};

export default Form;
