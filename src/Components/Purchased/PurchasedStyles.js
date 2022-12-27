import styles from "styled-components";

export const Container = styles.div`
  display: flex;
  justify-content: center;
  border-radius: 0.2rem;
  width: 100%;
  margin: 0.5rem 2rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: start;
  }
`;
export const ImgDiv = styles.div`
  width: 120px;
  min-width: 90px;
  height: 125px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;
export const Img = styles.img`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  width: 100%;
`;
export const Info = styles.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Name = styles.h3`
  color: #3436A2;
  font-size: 1rem;
  display: block;
  width: 20%;
  &::first-letter {
    text-transform: capitalize;
  }
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;
export const Price = styles.p`
  font-weight: 700;
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;
export const Desc = styles.p`
  display: block;
  width: 50%;
  
  font-weight: 500;
  text-align: center;
  &::first-letter {
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px) {
    min-width: 90px;
    margin-right: auto;
  }
`;
export const DeleteItem = styles.div`
  cursor: pointer;
  background-color: transparent;
  width: 1.5rem;
  height: 1.5rem;
  font-size:40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: linear-gradient(to right, #24c6dc, #514a9d);
    border-radius: 5px;
    border:1px solid black
  }
`;