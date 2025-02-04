import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ApplicationForm from "./components/ApplicationForm";
import Ratings from "./components/Ratings";
import MainLoayout from "./layout/MainLoayout";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <MainLoayout>
        <Hero />
        <Features />
        <ApplicationForm />
        <Ratings />
      </MainLoayout>
    </I18nextProvider>
  );
}

export default App;
