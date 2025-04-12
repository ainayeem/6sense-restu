import { motion } from "framer-motion";
import timg from "../../assets/images/transparent banner.png";
import banner from "../../assets/images/banner.png";
import todayOffer from "../../assets/images/today-offer.png";
import leaf from "../../assets/icons/leaf.svg";

const Banner = () => {
  return (
    <div className="bg-custom-gradient xl:h-screen">
      <div
        className="bg-cover bg-center h-full pt-20 pb-8"
        style={{ backgroundImage: `url(${timg})` }}
      >
        <div className="xl:max-w-screen-xl xl:mx-auto grid xl:grid-cols-2 grid-cols-1 mx-8">
          <motion.div 
            className="relative flex flex-col justify-center text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="xl:bg-red-500 xl:bg-opacity-30 xl:w-[130%] xl:z-10 xl:border xl:border-black">
              <motion.p 
                className="xl:text-[120px] text-[48px] xl:leading-[130px] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                taste the authentic
                <br />
                saudi cuisine
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="roboto xl:mt-4 xl:mb-10">
                Among the best Saudi chefs in the world, serving
                <br />
                you something beyond flavor.
              </p>
              <motion.button 
                className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none roboto mt-8 mb-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE MENU
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              className="xl:w-[700px] xl:h-[649px]"
              src={banner}
              alt="banner"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              className="size-11 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"
              src={leaf}
              alt=""
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              className="xl:size-24 size-16 absolute right-0 lg:-bottom-3 bottom-0 xl:translate-x-1/2"
              src={todayOffer}
              alt=""
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
