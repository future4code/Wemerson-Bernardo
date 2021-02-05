import React from "react"
import useForm from "../../../hooks/useForm"
import FooterPrivate from "../../../components/private/footerPrivate/footerPrivate"
import { useHistory } from "react-router-dom"
import {goToHomePage} from "../../../routes/coordinator"
import { SideHeader } from "../../../components/public/header/headerStyled"
import { FormGridStyled, FormMainStyled } from "../../publicPages/formPage/formPageStyled"

const NewTripPage = () => {
  const history = useHistory()

  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });


  return <div>
    <SideHeader>
      <div onClick={() => goToHomePage(history)}>Logo</div>
      <h1>Create New Trip</h1>
    </SideHeader>
    <FormMainStyled>
      <FormGridStyled>
      <input
          name="name"
          type={"text"}
          placeholder={"Name of trip"}
          value={form.name}
          onChange={onChange}
          pattern={"^.{5,}"}
          required
        />
        <input />
        <input
          name="planet"
          type={"text"}
          placeholder={"Insert a planet"}
          value={form.planet}
          onChange={onChange}
          required
        />
        <input
          name="date"
          type={"date"}
          title={"Insert date after 01/01/2023"}
          min={"01/01/2023"}
          placeholder={"Date of trip"}
          value={form.date}
          onChange={onChange}
          required
        />
      </FormGridStyled>
    </FormMainStyled>
    <FooterPrivate />

  </div>
};

export default NewTripPage;