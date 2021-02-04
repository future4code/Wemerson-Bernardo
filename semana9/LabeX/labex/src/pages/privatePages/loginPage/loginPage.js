import React from "react"
import axios from "axios"
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {goToHomePrivatePage} from "../../../routes/coordinator"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      history.push("/home-private-page")
    }
  }, [history])

  const login = () => {
    const body = {
      email: email,
      password: password
    }

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/wemerson-bernardo-epps/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push("/home-private-page")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <input value={email} onChange={handleEmail} placeholder="E-mail" />
      <input
        value={password}
        onChange={handlePassword}
        placeholder="Senha"
        type="password"
      />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginPage