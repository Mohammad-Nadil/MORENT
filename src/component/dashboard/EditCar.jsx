import React from "react";
import {
  FaCarSide,
  FaDollarSign,
  FaUsers,
  FaImage,
  FaGasPump,
  FaSave,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { MdEdit, MdOutlinePhotoLibrary } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";

const EditCar = () => {
  return (
    <main className="flex-1 overflow-y-auto font-jakarta bg-gray-50">
      <div className=" mx-auto space-y-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
            Edit Car Details
          </h1>
          <p className="text-gray-500 mt-1">
            Refine specifications and visual assets for the vehicle fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {/* LEFT */}
          <div className="xl:col-span-2 2xl:col-span-3 space-y-6">
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-gray-800">
                <MdEdit className="text-primary text-2xl" />
                Car Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
                    <FaCarSide /> Car Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary outline-none transition"
                    type="text"
                    defaultValue="Nissan GT-R"
                  />
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
                    Car Type
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <option>Sport</option>
                    <option>SUV</option>
                    <option>MPV</option>
                  </select>
                </div>

                {/* fuel */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
                    <FaGasPump /> Car fuel
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <option>Sport</option>
                    <option>SUV</option>
                    <option>MPV</option>
                  </select>
                </div>

                {/* transmission */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
                    <GiGearStickPattern /> Car transmission
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <option>Sport</option>
                    <option>SUV</option>
                    <option>MPV</option>
                  </select>
                </div>

                {/* Capacity */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
                    <FaUsers /> Capacity
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <option>2 Person</option>
                    <option selected>4 Person</option>
                  </select>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
                    <FaDollarSign /> Rent Price
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                    type="number"
                    defaultValue="80"
                  />
                </div>
                {/* Description */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl resize-none focus:ring-2 focus:ring-primary outline-none"
                    rows="4"
                    defaultValue="NISMO has been the primary go-to moniker..."
                  />
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <MdOutlinePhotoLibrary className="text-primary text-2xl" />
                Car Images
              </h3>

              <div className="flex-1 space-y-4">
                {/* MAIN IMAGE */}
                <div className="relative aspect-video rounded-2xl overflow-hidden group">
                  <img
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf_L0JCbBm0SKP4oLO1RUvTl8DGs16tqsQTOg7R7f_osqOn5CUO3-MEUijsWkF_8C3KtdiKHuf4OfmrQRuCFVFLHsKRm5HPYP7dIKoavBy2SRXyb1iWSKtArKPRxKXctI4bH_-a2wgdmP4lHP-zoWy41IndlNEW1o73sUSDNTPqlEhVm0TP4xAtMR-tDvmChdRpoLTFGwyJ09ukLc_HSs6QUvRHOMcQCX6m3SdBH2LbnWhD1i9-UB5R6IWqX_vlPQyFrlH8CDYe7EL"
                    alt="car"
                  />

                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/30">
                      <FaImage /> Replace
                    </button>
                  </div>
                </div>

                {/* THUMBNAILS */}
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="relative aspect-[16/9] rounded-xl overflow-hidden group"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6ie6YliWcJ46EINfIeXAUoa5aDd510QiCTHlMnrrIxDQ8JuBfaQf5Oiz6j9kiYcQkjI0vnhwdGLUAVLA8a7tPTCXrhIG9sq4WYG96M2BHxMxGC6K1Cjc_d-2jnamxr9RqvQIWE_YAQgprwMEEhVWkf8ILcD4PmkAB8ex-Jbq1lSH3Ux2d5P44sermiVbGJ8YwnXS6zp6G8nDtOF87Hufq94kwSqD95na_j9-CBnx9NVpEDuxlcIq71Zv8BxA4Yq1E2W6RK7WW0sb"
                        alt=""
                      />
                    </div>
                  ))}

                  {/* ADD */}
                  <button className="aspect-[16/9] rounded-xl border-2 border-dashed flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition">
                    <FaImage className="text-xl" />
                    <span className="text-xs">Add</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ACTION */}
        <div className="flex justify-between items-center pt-6 border-t">
          {/* DELETE BUTTON */}
          <button className="px-6 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition flex items-center gap-2">
            <FaTrash /> Delete Car
          </button>

          {/* RIGHT BUTTONS */}
          <div className="flex gap-4">
            <button className="px-6 py-2 text-gray-500 hover:text-black transition flex items-center gap-2">
              <FaTimes /> Cancel
            </button>

            <button className="px-8 py-2 bg-primary text-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition flex items-center gap-2">
              <FaSave /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditCar;
