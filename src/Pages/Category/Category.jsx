import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import CoinTypes from "../../Components/CoinTypes/CoinTypes";

const Category = () => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  return (
    <>
      <Header />
      <CoinTypes param={pathName} />
    </>
  );
};

export default Category;
