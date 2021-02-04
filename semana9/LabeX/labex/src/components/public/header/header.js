import React from "react"
import { useHistory } from "react-router-dom"
import {goToLoginPage, goToHomePage} from "../../../routes/coordinator"
import { SideHeader } from "./headerStyled";

const Header = () => {
    const history = useHistory()
  
    return <SideHeader>
      <div onClick={() => goToHomePage(history)}>Logo</div>
      <div onClick={() => goToLoginPage(history)}>Login</div>
      </SideHeader>;
  };
  
  export default Header;