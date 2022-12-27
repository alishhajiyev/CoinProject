import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import Content from "../../Components/CoinTypes/CoinTypes";

const HomePage = () => {
  const myData = useSelector((state) => state.allProducts);

  return (
    <>
      <Header />
      {myData && <Content />}
    </>
  );
};

export default HomePage;
