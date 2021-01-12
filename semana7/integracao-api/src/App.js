import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  state = {
    usuarios: [],
    valorNome: "",
    valorEmail: ""
  }

  guardaNome = (e) => {
    this.setState({ valorNome: e.target.value })
  }

  guardaEmail = (e) => {
    this.setState({ valorEmail: e.target.value })
  }

  novoCadastro = () => {
    const body = {
      name: this.state.valorNome,
      email: this.state.valorEmail
    }

    const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: 'wemerson-bernardo-epps'
      }
    }
    )
    request.then((resposta) => {
      alert("Cadastro realizado com sucesso!")
      this.usuariosCadastrados()
      this.setState({ valorNome: "", valorEmail: "" })
    }).catch((erro) => {
      alert("Ops! Algo deu errado...")
    })
  }

  usuariosCadastrados = () => {
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: 'wemerson-bernardo-epps'
      }
    }
    )

    request.then((resposta) => {
      this.setState({ usuarios: resposta.data })
    }).catch((erro) => {
      alert("Não foi possível realizar a consulta desejada! :(")
    })
  }

  componentDidMount = () => {
    this.usuariosCadastrados()
  }

  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      return <p>{usuario.name} <button>X</button></p>
    })

    return (
      <div>
        <h1>Realize seu cadastro:</h1>
        <input
          onChange={this.guardaNome}
          value={this.state.valorNome}></input>
        <p />
        <input
          onChange={this.guardaEmail}
          value={this.state.valorEmail}></input>
        <p />
        <button onClick={this.novoCadastro}>Adicionar</button>

        {listaDeUsuarios}
      </div>
    )
  }
}