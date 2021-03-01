import axios from 'axios'
import { goToFeed } from '../routes/Coordinator'



export const login = (body, clear, history) => {
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeed(history)
    }).catch((err) => alert("Ops, usuário não cadastrado ou senha incorreta!"))
}

export const register = (body, clear, history) => {
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeed(history)
    }).catch((err) => alert("Ops! Ocorreu um erro interno, tente novamente mais tarde."))
}

