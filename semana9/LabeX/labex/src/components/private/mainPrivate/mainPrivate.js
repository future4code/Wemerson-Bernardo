import React from "react"
import { useHistory } from "react-router-dom"
import { goToAllTripsPage, goToManagePage, goToNewTripPage } from "../../../routes/coordinator";
import { PrivateMainStyled } from "./mainPrivateStyled";


const MainPrivate = () => {
    const history = useHistory()
  
    return <PrivateMainStyled>
    <div onClick={() => goToNewTripPage(history)}>Create New Trip</div>
    <div onClick={() => goToManagePage(history)}>Manage Subscriptions </div>
    <div onClick={() => goToAllTripsPage(history)}>All Trips</div>
    </PrivateMainStyled>
  }
  
  export default MainPrivate;