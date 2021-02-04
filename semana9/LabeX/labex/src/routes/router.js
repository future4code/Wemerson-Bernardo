import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/publicPages/homePage/homePage"
import FlyPage from "../pages/publicPages/flyPage/flyPage"
import AboutPage from "../pages/publicPages/aboutPage/aboutPage"
import AskedPage from "../pages/publicPages/askedPage/askedPage"
import FormPage from "../pages/publicPages/formPage/formPage"
import HomePrivatePage from "../pages/privatePages/homePrivatePage/homePrivatePage"
import LoginPage from "../pages/privatePages/loginPage/loginPage"
import NewTripPage from "../pages/privatePages/newTripPage/newTripPage"
import AllTripPage from "../pages/privatePages/allTripPage/allTripPage"
import ManagePage from "../pages/privatePages/managePage/managePage"
import ErrorPage from "../ErrorPage"

export default function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path={"/fly-with-us"}>
            <FlyPage />
          </Route>
          <Route exact path={"/about-us"}>
            <AboutPage />
          </Route>
          <Route exact path={"/asked-questions"}>
            <AskedPage />
          </Route>
          <Route exact path={"/application-form"}>
            <FormPage />
          </Route>
          <Route exact path={"/home-private-page"}>
            <HomePrivatePage />
          </Route>
          <Route exact path={"/login"}>
            <LoginPage />
          </Route>
          <Route exact path={"/new-trip"}>
            <NewTripPage />
          </Route>
          <Route exact path={"/all-trips"}>
            <AllTripPage />
          </Route>
          <Route exact path={"/manage-center"}>
            <ManagePage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }