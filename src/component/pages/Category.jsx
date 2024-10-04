import React, { useState } from "react";
import Container from "../layer/Container";
import Paginate from "../Paginate";
import { motion } from "framer-motion";
import Pick2 from "../layer/Pick2";
import SideNav from "../SideNav";

const Category = () => {
  // Set initial itemsPerPage to 12
  let [itemsPerPage, setItemsPerPage] = useState(12);

  // Function to increase itemsPerPage by 12
  let increaseItemsPerPage = () => {
    setItemsPerPage(itemsPerPage + 12);
  };
  return (
    <div className="py-1" >
      <Container className="flex flex-col xl:flex-row bg-secondary">
        <div className="sideBar xl:w-1/4  flex-col bg-white">
          <SideNav />
        </div>
        <div className="main w-full xl:w-3/4 gap-8 flex flex-col pt-5 xl:p-8 ">
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
      </Container>
    </div>
  );
};

export default Category;
