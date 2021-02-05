import React from "react"
import useForm from "../../../hooks/useForm"
import Footer from "../../../components/public/footer/footer"
import { useHistory } from "react-router-dom"
import {goToHomePage} from "../../../routes/coordinator"
import { SideHeader } from "../../../components/public/header/headerStyled"
import { FormGridStyled, FormMainStyled, TextAreaStyled } from "./formPageStyled"
import AllCountries from "./allCountries"

const FormPage = () => {
  const history = useHistory()

  const [form, onChange, clear] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: ""
  });

  return <div>
    <SideHeader>
      <div onClick={() => goToHomePage(history)}>Logo</div>
      <h1>Application Form</h1>
    </SideHeader>
    <FormMainStyled>
      <FormGridStyled>
      <input
          name="name"
          type={"text"}
          placeholder={"Enter your full name"}
          value={form.name}
          onChange={onChange}
          pattern={"^.{3,}"}
          required
        />
        <input
          name="age"
          type={"number"}
          placeholder={"Enter your full name"}
          value={form.age}
          onChange={onChange}
          min={18}
          required
        />
        <TextAreaStyled
        name="applicationText"
        type={"text"}
        placeholder={"Why should you be chosen?"}
        value={form.applicationText}
        onChange={onChange}
        pattern={"^.{30}"}
        required
        />
        <TextAreaStyled
          name="profession"
          type={"text"}
          placeholder={"What is your current profession?"}
          value={form.profession}
          onChange={onChange}
          pattern={"^.{10}"}
          required
        />

        <AllCountries />
      </FormGridStyled>
    </FormMainStyled>
    <Footer />
  </div>;
};

export default FormPage;