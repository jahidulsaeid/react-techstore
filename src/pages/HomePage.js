import React from "react";
import { ProductConsumer } from "../context";

const HomePage = () => {
  return (
    <>
      <ProductConsumer>{value => <h1>{value}</h1>}</ProductConsumer>
    </>
  );
};

export default HomePage;
