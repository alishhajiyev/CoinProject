import styles from "styled-components";

export const Container = styles.div`
  max-height: 150px;
  min-width: 150px;
  max-width:200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0.5rem 2rem 1rem 2rem;
  background-color: white;
  box-shadow: rgb(0 0 255 / 25%) 0px 54px 60px 0px, rgb(0 0 255 / 12%) 0px -22px 30px 8px, rgb(0 0 255 / 12%) 0px 4px 24px 1px, rgb(0 0 255 / 17%) 0px 11px 14px 1px, rgb(0 0 255 / 9%) 0px -3px 22px 2px;
  @media screen and (min-width: 768px) {
    margin: 0.5rem 2rem 0rem 0rem;
  }
`;
export const Info = styles.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
  }
`;
export const Name = styles.h3`
  color: #3436A2;
  font-size: 1rem;
  display: block;
`;
export const Price = styles.p`
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;