"use client";
import Form from "@/components/Form";
import TableList from "@/components/TableList";
import { useState, useEffect } from "react";

export default function Home() {
  const [itemList, setItemList] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemList));
  }, [itemList]);

  const addItem = (item) => {
    setItemList((prevList) => [...prevList, item]);
  };

  const deleteItem = (index) => {
    setItemList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <Form addItem={addItem} />
      <TableList itemList={itemList} onDelete={deleteItem} />
    </div>
  );
}
