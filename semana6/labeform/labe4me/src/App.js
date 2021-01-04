import React, { Component } from 'react'
import './App.css';
import DadosGerais from './Components/Dados-Gerais'
import EnsinoSuperior from './Components/Ensino-Superior'
import InformacoesGerais from './Components/Informacoes-Gerais'
import FimFormulario from './Components/Fim-Formulario'

export default class App extends Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />
      case 2:
        return <EnsinoSuperior />
      case 3:
        return <InformacoesGerais />
      case 4:
        return <FimFormulario />
    }
  }

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1 }) 
  } 

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <button onClick={this.proximaEtapa}> Próxima Etapa</button>
      </div>
    )
  }

}


