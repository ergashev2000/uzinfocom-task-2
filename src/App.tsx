import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ApplicationForm from "./components/ApplicationForm";
import Ratings from "./components/Ratings";
import MainLoayout from "./layout/MainLoayout";
import { RatingsProvider } from "./context/RatingsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <RatingsProvider>
          <MainLoayout>
            <Hero />
            <Features />
            <ApplicationForm />
            <Ratings />
            <Toaster position="top-right" />
          </MainLoayout>
        </RatingsProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
