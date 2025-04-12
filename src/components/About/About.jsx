import { motion } from "framer-motion";
import aboutImg from "../../assets/images/About.png";
import marketExp from "../../assets/images/Market Place.png";
import callAlt from "../../assets/icons/call-alt.png";
import fastDelivery from "../../assets/icons/Fast Delivery.png";
import absoluteDining from "../../assets/icons/Absolute Dining.png";
import pickupDelivery from "../../assets/icons/Pickup Delivery.png";
import bowlSalad from "../../assets/images/bowl-salad.png";

const About = () => {
  return (
    <>
      <div className="xl:mt-[120px] grid xl:grid-cols-2 max-w-screen-xl xl:mx-auto mx-8 mt-8">
        <motion.div 
          className="xl:absolute xl:right-0 hidden xl:block"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img className="" src={bowlSalad} alt="" />
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.img
              className="xl:h-[460px] xl:w-[617px] mb-8"
              src={aboutImg}
              alt=""
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div 
            className="absolute top-5 left-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img className="h-[73px] xl:h-32" src={marketExp} alt="" />
          </motion.div>
        </motion.div>

        {/* tab   */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-7 h-1 w-full bg-[#BD1F17] mx-auto"></div>
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab roboto text-black checked:bg-[#B52B1D] checked:text-white"
              aria-label="About"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-2xl uppercase">
                Exceptional culinary experience and delicious food
              </h1>
              <p className="roboto">
                An exceptional culinary journey that delights every sense, where
                flavors are artfully crafted and beautifully presented. Each
                dish tells a story, blending tradition with innovation. Truly
                unforgettable dining that leaves a lasting impression.
              </p>
              {/* button and call */}
              <div className="flex  items-center mt-8">
                <div>
                  <button className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none mr-8 roboto">
                    ABOUT MORE
                  </button>
                </div>
                <div className="flex ">
                  <img src={callAlt} alt="" />
                  <p className="xl:font-bold text-sm ml-1">+88 3426 739 485</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab roboto text-black checked:bg-[#B52B1D] checked:text-white"
              aria-label="Experience"
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-2xl uppercase">
                An Unforgettable Culinary Experience
              </h1>
              <p className="roboto">
                The meal was a perfect blend of creativity and flavor, elevating
                each ingredient into something extraordinary. Every dish was
                presented with elegance, and each bite was a memorable delight.
                This was more than just dining; it was a celebration of taste
                and artistry.
              </p>
              {/* button and call */}
              <div className="flex  items-center mt-8">
                <div>
                  <button className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none mr-8 roboto">
                    ABOUT MORE
                  </button>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab roboto text-black checked:bg-[#B52B1D] checked:text-white"
              aria-label="Contact"
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-2xl uppercase">Contact Us</h1>
              <p className="roboto">
                For reservations or inquiries, please reach out via phone or
                email us. We look forward to creating an exceptional dining
                experience for you.
              </p>
              {/* button and call */}
              <div className="flex  items-center mt-8">
                <div className="flex ">
                  <img src={callAlt} alt="" />
                  <p className="xl:font-bold text-sm ml-1">+88 3426 739 485</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* extra part */}
      <div className="xl:grid xl:grid-cols-3 xl:max-w-screen-xl xl:mx-auto xl:mt-20 mb-28 mx-8">
        {/* item 1 */}
        <motion.div 
          className="flex items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-full shadow-lg p-6 mr-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={fastDelivery} alt="" />
          </motion.div>
          <div>
            <h1 className="xl:uppercase xl:font-bold text-2xl">fast delivery</h1>
            <p>Within 30 minutes</p>
          </div>
        </motion.div>

        {/* item 2 */}
        <motion.div 
          className="flex items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-full shadow-lg p-6 mr-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={absoluteDining} alt="" />
          </motion.div>
          <div>
            <h1 className="uppercase xl:font-bold text-2xl">absolute dining</h1>
            <p>Best buffet resturant</p>
          </div>
        </motion.div>

        {/* item 3 */}
        <motion.div 
          className="flex items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-full shadow-lg p-6 mr-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={pickupDelivery} alt="" />
          </motion.div>
          <div>
            <h1 className="uppercase xl:font-bold text-2xl">pickup delivery</h1>
            <p>Grab your food order</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
