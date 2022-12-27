import styles from "styled-components";

export const Container = styles.div`
  border-radius: 0.2rem;
  width: 280px;
  margin: 1rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const ImgDiv = styles.div`
  width: 100%;
  height: 215px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;
export const Img = styles.img`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 70%;
`;
export const Main = styles.div`
  display: flex;
  flex-direction: column;
`;
export const Info = styles.div`
  display: Flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`;
export const Name = styles.h2`
  font-size: 1.15rem;
  color: #3436A2;
`;
export const Price = styles.h2`
  font-size: 1.15rem;
  color: black;
`;
export const AddToCart = styles.button`
  cursor: pointer;
  background-color: white;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.03rem;
  width: 60%;
  align-self: center;
  border-radius:10px;
  padding: 0.5rem;
  border: 2px solid black;
  color: #3436A2;
  margin: 0.5rem;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: linear-gradient(to right, #24c6dc, #514a9d);
    color: white;
  }
`;
export const RemoveFromCart = styles.button`
  cursor: pointer;
  background: linear-gradient(to right, #24c6dc, #514a9d);
  border-radius:10px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.03rem;
  width: 60%;
  align-self: center;
  padding: 0.5rem;
  border: 2px solid black;
  color: white;
  margin: 0.5rem;
  transition: all 0.25s ease-in-out;
`;