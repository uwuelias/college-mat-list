"use client";
import Form from "@/components/Form";
import TableList from "@/components/TableList";
import { useState, useEffect } from "react";

export default function Home() {
  const [itemList, setItemList] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if running on client
    setIsClient(true);
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      setItemList(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("items", JSON.stringify(itemList));
    }
  }, [itemList, isClient]);

  const addItem = (item) => {
    setItemList((prevList) => [...prevList, item]);
  };

  const deleteItem = (index) => {
    setItemList((prevList) => prevList.filter((_, i) => i !== index));
  };

  if (!isClient) {
    // Render a loading state or placeholder while client-side code is initializing
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <Form addItem={addItem} />
      <TableList itemList={itemList} onDelete={deleteItem} />
    </div>
  );
}
