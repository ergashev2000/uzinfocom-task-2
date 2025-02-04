import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SelectLang from "./commons/SelectLang";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full sticky top-0 border-b border-[#6E7892]/20 z-10 py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center p-4 gap-8 font-medium">
            <li>
              <Link to="/">{t('nav.plan')}</Link>
            </li>
            <li>
              <Link to="/">{t('nav.admissionRequirements')}</Link>
            </li>
            <li>
              <Link to="/">{t('nav.instructions')}</Link>
            </li>
            <li>
              <Link to="/">{t('nav.sorting')}</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <SelectLang />
          <button className="bg-[#252A3B] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[#252A3B]/90 cursor-pointer transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
            {t('nav.takeTest')}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-white z-50 lg:hidden transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="p-4">
            <ul className="flex flex-col gap-6 font-medium">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.plan')}</Link>
              </li>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.admissionRequirements')}</Link>
              </li>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.instructions')}</Link>
              </li>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.sorting')}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
