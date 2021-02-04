import React from "react"
import { useHistory } from "react-router-dom"
import {goToAboutPage, goToAskedPage} from "../../../routes/coordinator"
import { BarFooter } from "./footerStyled"

const Footer = () => {
  const history = useHistory()

  return <BarFooter>
    <div onClick={() => goToAboutPage (history) }>About Us</div>
    <div>Social Media</div>
    <div  onClick={() => goToAskedPage (history) }>Frequently Asked Questions</div>
  </BarFooter>
}

export default Footer;
