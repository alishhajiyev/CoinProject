import styles from "styled-components";

export const Container = styles.div`
  display: flex;
  flex-flow: column;
  max-width: 1280px;
  margin: auto;
`;
export const Main = styles.div`
  display: flex;  
  flex-flow: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const Heading = styles.h1`
  display: block;
  font-size: 2rem;
  text-align: center;
  padding: 1rem 2rem;
  color: #514a9d;
  letter-spacing: 0.03rem;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
export const Purchased = styles.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Empty = styles.div`
  display: block;
  font-size: 1.5rem;
  border-radius:10px;
  text-align: center;
  padding: 1rem 2rem;
  color: white;
  letter-spacing: 0.03rem;
  font-weight: 500;
  text-align: center;
  background: linear-gradient(to right, #24c6dc, #514a9d);
  margin: auto;
`;
