import React from "react";
import { useHistory } from "react-router-dom"
import {goToFormPage} from "../../../routes/coordinator"
import {SideHeader} from "../../../components/public/header/headerStyled"
import { FlyGridStyled, FlyMainStyled } from "./flyPageStyled";
import Footer from "../../../components/public/footer/footer"

const FlyPage = () => {
  const history = useHistory()

  return <div>
  <SideHeader>
     <h1>It's time to fly with us!</h1>
    </SideHeader>
    <FlyMainStyled>
      <FlyGridStyled>
        cdnmjnwwwwwwwwwwwçjndfjisnfcowenfjwendkonsjodbnnwiodbnefjnadonweionin
        <button onClick={() => goToFormPage(history)}>Fly With Us Now</button>
      </FlyGridStyled>
    </FlyMainStyled>
    <Footer />
    </div>
}

export default FlyPage;