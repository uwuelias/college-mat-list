import React from "react";

const TableList = ({ itemList, onDelete }) => {
  return (
    <div className="w-full max-w-full overflow-x-auto mt-8">
      <table className="w-full table-fixed">
        <thead>
          <tr className="text-center">
            <th className="w-2/4 px-4 py-2">Item</th>
            <th className="w-1/4 px-4 py-2">Quantity</th>
            <th className="w-1/4 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, index) => (
            <tr key={index} className="border-t text-center">
              <td className="px-3 py-2 break-words">{item.name}</td>
              <td className="px-3 py-2 break-words">{item.quantity}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
