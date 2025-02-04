import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Button from "./commons/Button";

import Dart from "../assets/images/dart.svg";
import Flutter from "../assets/images/flutter.svg";
import Html from "../assets/images/html.svg";
import Python from "../assets/images/python.svg";
import Figma from "../assets/images/figma.svg";

const Hero = () => {
  const { t } = useTranslation();

  const avatars = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
      name: "John Doe",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/10412892/pexels-photo-10412892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
      name: "John Doe",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/17594386/pexels-photo-17594386/free-photo-of-portrait-of-man-with-mustache-and-beard-in-studio.jpeg?auto=compress&cs=tinysrgb&w=100",
      name: "John Doe",
    },
  ];

  return (
    <div className="container mx-auto px-4 flex justify-center items-center min-h-[600px] h-[calc(100vh-80px)] max-h-[900px] relative">
      <span className="absolute top-[65%] left-[70%] hidden md:block">
        <img src={Dart} alt="Dart" className="w-10 md:w-14 h-auto" />
      </span>
      <span className="absolute right-[10%] hidden md:block">
        <img src={Flutter} alt="Flutter" className="w-10 md:w-14 h-auto" />
      </span>
      <span className="absolute top-[10%] left-[40%] hidden md:block">
        <img src={Html} alt="Html" className="w-8 md:w-12 h-auto" />
      </span>
      <span className="absolute top-[65%] left-[10%] hidden md:block">
        <img src={Python} alt="Python" className="w-10 md:w-14 h-auto" />
      </span>
      <span className="absolute top-[20%] left-[5%] hidden md:block">
        <img src={Figma} alt="Figma" className="w-8 md:w-10 h-auto" />
      </span>

      <motion.div 
        className="flex flex-col items-center text-center gap-4 px-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.title')} <br /> {t('hero.subtitle')}!
        </motion.h1>

        <motion.div 
          className="flex items-center gap-2 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex">
            {avatars.map((avatar, index) => (
              <motion.div
                key={avatar.id}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white -ml-2 first:ml-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <img
                  src={avatar.img}
                  alt={avatar.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="text-gray-600 text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="font-bold">+500</span> {t('hero.participants')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-4 md:mt-6"
        >
          <Button>{t('hero.button')}</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
