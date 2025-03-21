import React, { useState } from "react";
import Pick2 from "./layer/Pick2";
import Paginate from "./Paginate";
import { motion } from "framer-motion";

const CategoryList = () => {
    // Set initial itemsPerPage to 12
  let [itemsPerPage, setItemsPerPage] = useState(6);

  // Function to increase itemsPerPage by 12
  let increaseItemsPerPage = () => {
    setItemsPerPage(itemsPerPage + 6);
  };
  return (
    <div className="main w-full xl:w-3/4 gap-8 flex flex-col pt-3 xl:pl-5 ">
      <Pick2 className="w-full" />
      <Paginate itemsPerPage={itemsPerPage} />
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale up on hover
        whileTap={{ scale: 0.9 }} // Scale down on click
        onClick={increaseItemsPerPage}
        className="bg-blue-500 text-white p-2 rounded mx-auto"
      >
        Show More
      </motion.button>
    </div>
  );
};

export default CategoryList;
