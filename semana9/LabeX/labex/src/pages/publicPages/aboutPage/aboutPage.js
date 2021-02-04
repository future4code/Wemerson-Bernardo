import React from "react";
import Header from "../../../components/public/header/header"
import Footer from "../../../components/public/footer/footer"
import { AboutMainStyled, AboutGridStyled, GridStyled, ColumnGridStyled } from "./aboutStyled";

const AboutPage = () => {
  return <div>
    <Header />
    <AboutMainStyled>
      <AboutGridStyled>
        <ColumnGridStyled>TesteDoItem1</ColumnGridStyled>
        <ColumnGridStyled>TesteDoItem2</ColumnGridStyled>
        <GridStyled>TesteDoItem5</GridStyled>
      </AboutGridStyled>
    </AboutMainStyled>
    <Footer />
  </div>;
};

export default AboutPage;