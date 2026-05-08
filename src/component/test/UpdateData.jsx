import React, { useState } from "react";
import toast from "react-hot-toast";
import { app } from "../../db/firebase";
import { getDatabase, ref, get, update, remove } from "firebase/database";
import { deleteImage } from "../../db/cloudinary";

const UpdateData = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const db = getDatabase(app);
    const snap = await get(ref(db, `cars/test/${id}`));

    if (snap.exists()) {
      setData(snap.val());
    } else {
      toast.error("Data nai 😢");
    }
  };

  const handleUpdate = async () => {
    if (!id.trim()) {
      toast.error("ID faka rakhba na 😑");
      return;
    }

    try {
      setLoading(true);

      const database = getDatabase(app);
      const newDocRef = ref(database, `cars/test/${id}`);

      // data save
      await update(newDocRef, {
        name: input,
        number: Math.floor(Math.random() * 1000),
        createdAt: Date.now(),
      });

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
      setLoading(true);

      const db = getDatabase(app);
      const refData = ref(db, `cars/test/${id}`);

      const snap = await get(refData);

      if (!snap.exists()) {
        toast.error("Data nai 😢");
        return;
      }

      const item = snap.val();

      // 1. delete image from cloudinary
      if (item.imageId) {
        await deleteImage(item.imageId);
      }

      // 2. delete firebase data
      await remove(refData);

      toast.success("Deleted successfully ✅");

      setId("");
      setInput("");
    } catch (error) {
      toast.error("Delete failed ❌");
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

export default UpdateData;
