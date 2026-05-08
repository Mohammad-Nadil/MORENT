import React, { useState } from "react";
import { app } from "../../db/firebase";
import { getDatabase, ref, get } from "firebase/database";
import toast from "react-hot-toast";

const GetOne = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const find = async () => {
    if (!input.trim()) {
      toast.error("ID dao age 😑");
      return;
    }

    try {
      setLoading(true);

      const database = getDatabase(app);
      const dataRef = ref(database, `cars/test/${input}`);
      const snapshot = await get(dataRef);

      if (!snapshot.exists()) {
        toast.error("No data found 😢");
        setData(null);
        return;
      }

      setData({
        id: input,
        ...snapshot.val(),
      });

      toast.success("Data loaded successfully ✅");
    } catch (error) {
      toast.error("Something went wrong ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:col-span-2 lg:col-span-1 ">
      <div className="w-full p-6 rounded-3xl bg-white shadow-lg border flex flex-col gap-5 ">
        <h2 className="text-xl font-bold text-gray-800 ">
          🔎 Search Car by ID
        </h2>

        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">Enter Car ID</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. -Nabc123xyz"
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <button
          onClick={find}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 transition text-white py-2 px-5 rounded-lg font-medium disabled:opacity-50 w-max"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {/* Result */}
        {data ? (
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-5 border shadow flex flex-col gap-3">
            <p className="text-xs text-gray-400 break-all">ID: {data.id}</p>

            <div className="flex justify-between">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold">{data.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Number</span>
              <span>{data.number}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Created</span>
              <span className="text-sm">
                {new Date(data.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        ) : (
          !loading && <p className=" text-gray-400">Kono data nai 😢</p>
        )}
      </div>
    </div>
  );
};

export default GetOne;
