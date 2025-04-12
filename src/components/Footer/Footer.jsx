import { motion } from "framer-motion";
import clock from "../../assets/icons/clock.png";
import call from "../../assets/icons/call-yellow.svg";
import mail from "../../assets/icons/mail.png";
import map from "../../assets/icons/map-pin.png";
import fb from "../../assets/icons/social/fb.png";
import xlink from "../../assets/icons/social/x.png";
import ig from "../../assets/icons/social/ig.png";
import lin from "../../assets/icons/social/in.png";
import footerImg from "../../assets/images/footer-img.jpeg";

const Footer = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="bg-black bg-opacity-80">
        <div className="max-w-screen-xl xl:mx-auto mx-8 py-8 text-center text-white">
          <motion.h1 
            className="uppercase text-5xl text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            we ready to have you the best dining experiences
          </motion.h1>
          <div className="grid xl:grid-cols-4">
            <motion.div 
              className="flex flex-col items-center my-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img 
                className="size-8" 
                src={clock} 
                alt=""
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h1 className="text-xl my-3">opening hours</h1>
              <div className="roboto">
                <p>Monday - Sunday</p>
                <p>9:00 AM to 11:30 PM</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center my-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img 
                className="size-8" 
                src={call} 
                alt=""
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <h1 className="text-xl my-3">let&apos;s talk</h1>
              <div className="roboto">
                <p>Phone: 1-800-222-4545</p>
                <p>Fax: 1-800-222-4545</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center my-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.img 
                className="size-8" 
                src={mail} 
                alt=""
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />
              <h1 className="text-xl my-3">book a table</h1>
              <div className="roboto">
                <p>Email: demo@website.com</p>
                <p>Support: support@website.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center my-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img 
                className="size-8" 
                src={map} 
                alt=""
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <h1 className="text-xl my-3">our address</h1>
              <div className="roboto">
                <p>123 Stree New York City</p>
                <p>United States Of America</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-center gap-4 mb-4 mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[fb, xlink, ig, lin].map((icon, index) => (
              <motion.img 
                key={index}
                className="size-9" 
                src={icon} 
                alt=""
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </motion.div>

          <motion.p 
            className="roboto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 All Rights Reserved 
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
