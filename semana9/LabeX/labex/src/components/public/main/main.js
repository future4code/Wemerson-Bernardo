import React from "react"
import { useHistory } from "react-router-dom"
import {goToFlyPage} from "../../../routes/coordinator"
import { MainStyled } from "./mainStyled";

const Main = () => {
    const history = useHistory()
  
    return <MainStyled>
      <div>Welcome to LabeX</div>
      <div>
      <button onClick={() => goToFlyPage(history)}>Fly With Us</button>
      </div>
      </MainStyled>;
  };
  
  export default Main;