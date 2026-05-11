import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div
            className="relative h-[50px] w-[230px] overflow-hidden rounded-lg"
            style={{
              boxShadow: "0 0 0 7px #3563E9, inset 0 0 0 1px #3563E9",
            }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#3563E9]"
              animate={{
                width: ["0%", "100%"],
              }}
              transition={{
                duration: 0.5,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
