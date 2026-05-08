import React, { useState } from "react";
import { app } from "../../db/firebase";
import { getDatabase, ref, get } from "firebase/database";
import toast from "react-hot-toast";

const LivePreview = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const database = getDatabase(app);
      const dataRef = ref(database, "cars/test");
      const snapshot = await get(dataRef);

      if (!snapshot.exists()) {
        toast.error("No data found 😢");
        setData([]);
        return;
      }

      const formattedData = Object.entries(snapshot.val()).map(
        ([id, value]) => ({
          id,
          ...value,
        }),
      );

      // const formattedData = Object.values(snapshot.val());

      setData(formattedData);
      toast.success("Data loaded successfully ✅");
      // console.log(formattedData);
      
    } catch (error) {
      toast.error("Something went wrong ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 border rounded-2xl shadow-sm flex flex-col gap-5 bg-white sm:col-span-2 lg:col-span-3">
      <h2 className="text-lg font-semibold text-gray-800">🚗 Live Preview</h2>

      <button
        onClick={fetchData}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-lg w-max disabled:opacity-50"
      >
        {loading ? "Loading..." : "Get Data"}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.length > 0
          ? data.map((item) => (
              <div
              key={item.id}
              className="rounded-2xl p-4 bg-white/80 backdrop-blur border shadow hover:shadow-lg transition flex flex-col gap-2">
                <p className="text-[10px] text-gray-400 truncate">{item.id}</p>

                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-40 object-contain"
                  />
                )}
                <p className="text-sm text-gray-500">🔢 {item.number}</p>

                <p className="text-xs text-gray-400">
                  📅 {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          : !loading && <p className="text-gray-500">Kono data nai 😢</p>}
      </div>
    </div>
  );
};

export default LivePreview;
