import React from "react";
import Product from "../CoinInfo/CoinInfo"
import {Container,Main,Heading,Products} from "./CoinTypesStyles";
import { useSelector } from "react-redux";

const Content = ({ param }) => {
  const data = useSelector((state) => state.allProducts);
  const heading = param ? param : "All Products";
  const allData = param? data.filter((e) => e.category === param): data;
  return (
    <Container>
      <Main>
        <Heading>{heading}</Heading>
        <Products>
          {allData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Products>
      </Main>
    </Container>
  );
};

export default Content;
