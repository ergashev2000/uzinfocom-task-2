import { useState } from "react";
import { ChevronDown } from "lucide-react";
import UzFlag from "../../assets/images/uz.svg";
import RuFlag from "../../assets/images/ru.svg";
import { useTranslation } from 'react-i18next';

const SelectLang = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    icon: UzFlag,
    value: "uz",
    label: "O’zbek tili",
  });

  const options = [
    { icon: UzFlag, value: "uz", label: "O’zbek tili" },
    { icon: RuFlag, value: "ru", label: "Russian" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    const newSelected = options.find(option => option.value === lng);
    if (newSelected) {
      setSelected(newSelected);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-36">
      <button
        className="w-full flex justify-center gap-2 font-medium items-center rounded-md px-2 py-1 bg-white text-sm"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={selected.icon}
          alt={selected.label}
          className="h-4 w-4"
        />
        {selected.label}
        <span
          className={`transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-1 w-full border border-gray-300 bg-white rounded-md shadow-md overflow-hidden">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
              onClick={() => changeLanguage(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectLang;
