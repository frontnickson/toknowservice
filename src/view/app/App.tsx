import React from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import AppRoutes from "../AppRoutes/AppRoutes";
import Sidebar from "../components/sidebar/Sidebar";


import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.main}>
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
