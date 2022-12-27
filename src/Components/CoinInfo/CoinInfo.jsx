import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux";
import {Container,Main,Img,Info,Name,Price,AddToCart,ImgDiv,RemoveFromCart} from "./CoinInfoStyles";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const show = cartItems.includes(product);
  return (
    <Container>
      <Main>
        <ImgDiv>
          <Img src={'../image_counts/'+product.img} />
        </ImgDiv>
        <Info>
          <Name>{product.name}</Name>
          <Price>{product.price/10}$</Price>
        </Info>
        {show ? (
          <RemoveFromCart onClick={() => dispatch(removeFromCart(product))}>
            Remove From Cart
          </RemoveFromCart>
        ) : (
          <AddToCart onClick={() => dispatch(addToCart(product))}>
            Add To Cart
          </AddToCart>
        )}
      </Main>
    </Container>
  );
};

export default ProductInfo;
