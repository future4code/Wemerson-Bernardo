import React from "react";
import Footer from "../../../components/public/footer/footer";
import Header from "../../../components/public/header/header";
import { AskedGridStyled, AskedMainStyled, GridStyled } from "./askedPageStyled";

const AskedPage = () => {
  return <div>
  <Header />
  <AskedMainStyled>
    <AskedGridStyled>
      <div>TesteDoItem1</div>
      <div>TesteDoItem2</div>
      <div>TesteDoItem3</div>
      <div>TesteDoItem4</div>
      <GridStyled>TesteDoItem5</GridStyled>
    </AskedGridStyled>
  </AskedMainStyled>
  <Footer />
</div>
};

export default AskedPage;