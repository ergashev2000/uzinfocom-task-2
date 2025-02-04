import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import FeatureImg from "../assets/images/feature-img.png";
import FeatureImg2 from "../assets/images/feature-img2.png";
import FeatureImg3 from "../assets/images/feature-img3.png";
import FeatureImg4 from "../assets/images/feature-img4.png";
import FeatureImg5 from "../assets/images/feature-img5.png";
import Mask from "../assets/images/mask.svg";

const Features = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        ease: "easeOut",
        duration: 0.6
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.div 
        className="flex flex-col lg:flex-row gap-8 justify-between items-center py-8 md:py-16 px-4 md:pr-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div 
          className="space-y-4 md:space-y-6 w-full lg:w-1/2 text-center lg:text-left"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-bold"
            variants={fadeInUp}
          >
            {t("features.section1.title")}
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-base md:text-lg"
            variants={fadeInUp}
          >
            {t("features.section1.description")}
          </motion.p>
        </motion.div>
        <motion.div 
          className="relative w-full lg:w-fit max-w-[500px] mx-auto"
          variants={fadeInUp}
        >
          <motion.img 
            src={Mask} 
            alt="Mask" 
            className="w-full md:w-[400px]"
            variants={fadeInUp}
          />
          <motion.div 
            className="absolute -left-4 md:-left-14 top-10 rounded-2xl overflow-hidden md:w-auto"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={FeatureImg}
              alt="Feature 1"
              className="w-full h-32 sm:h-32 md:h-40 object-cover rounded"
            />
          </motion.div>
          <motion.div 
            className="absolute right-2 top-20 rounded-2xl overflow-hidden md:w-auto"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={FeatureImg2}
              alt="Feature 2"
              className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
            />
          </motion.div>
          <motion.div 
            className="absolute left-1/2 w-[80%] md:w-[280px] -translate-x-1/2 -bottom-5 rounded-2xl overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={FeatureImg3}
              alt="Feature 2"
              className="w-full h-36 sm:h-32 md:h-40 object-cover rounded"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col-reverse lg:flex-row gap-8 justify-between items-center py-8 md:py-16 px-4 md:pl-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div 
          className="relative w-full lg:w-fit max-w-[500px] mx-auto"
          variants={fadeInUp}
        >
          <motion.img 
            src={Mask} 
            alt="Mask" 
            className="w-full md:w-[400px]"
            variants={fadeInUp}
          />
          <motion.div 
            className="absolute -left-4 md:-left-10 top-20 rounded-2xl overflow-hidden md:w-auto"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={FeatureImg4}
              alt="Feature 1"
              className="w-full h-44 sm:h-32 md:h-40 object-cover rounded"
            />
          </motion.div>
          <motion.div 
            className="absolute -right-2 md:-right-5 -bottom-5 rounded-2xl overflow-hidden md:w-auto"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={FeatureImg5}
              alt="Feature 2"
              className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
            />
          </motion.div>
        </motion.div>
        <motion.div 
          className="space-y-4 md:space-y-6 w-full lg:w-1/2 text-center lg:text-left"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-bold"
            variants={fadeInUp}
          >
            {t("features.section2.title")}
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-base md:text-lg"
            variants={fadeInUp}
          >
            {t("features.section2.description")}
          </motion.p>
          <motion.p 
            className="text-gray-600 text-base md:text-lg"
            variants={fadeInUp}
          >
            {t("features.section2.description")}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
