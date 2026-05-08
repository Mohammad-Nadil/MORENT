import React, { useState } from "react";
import toast from "react-hot-toast";
import { app } from "../../db/firebase";
import { getDatabase, ref, get, update, remove } from "firebase/database";
import { deleteImage } from "../../db/cloudinary";

const CloudUpdate = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {};

  const handleUpdate = async () => {
    if (!id.trim()) {
      toast.error("ID faka rakhba na 😑");
      return;
    }

    try {
      toast.success("Data successfully update hoise ✅");
      setInput("");
    } catch (error) {
      toast.error("Kisu ekta problem hoise ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!id.trim()) {
      toast.error("ID faka rakhba na 😑");
      return;
    }

    try {
      toast.success("Data successfully delete hoise ✅");
      setId("");
      setInput("");
    } catch (error) {
      toast.error("Kisu ekta problem hoise ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 border rounded-2xl shadow-sm bg-white flex flex-col gap-4 ">
      <h2 className="text-lg font-semibold text-gray-800">✍️ Update Data</h2>

      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
        className="border px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Kichu likho..."
        className="border px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-3">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition w-full"
        >
          Update
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition w-full"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CloudUpdate;
