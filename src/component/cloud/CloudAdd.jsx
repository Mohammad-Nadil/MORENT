import React, { useState } from "react";
import toast from "react-hot-toast";
import { app } from "../../db/firebase";
import { getDatabase, set, ref, push } from "firebase/database";
import { uploadImage } from "../../db/cloudinary";
import { image } from "framer-motion/client";

const CloudAdd = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!input.trim() || !file) {
      toast.error("Input or File faka rakhba na 😑");
      return;
    }

    try {
    
    } catch (error) {
      toast.error("Kisu ekta problem hoise ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 border rounded-2xl shadow-sm bg-white flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-800">✍️ Add Data</h2>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          className="w-20 h-20 object-cover rounded"
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Kichu likho..."
        className="border px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-lg disabled:opacity-50 w-max"
      >
        {loading ? "Adding..." : "Submit"}
      </button>
    </div>
  );
};

export default CloudAdd;
