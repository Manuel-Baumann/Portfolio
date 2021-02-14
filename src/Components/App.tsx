import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
