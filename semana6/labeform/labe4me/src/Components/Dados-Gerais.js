import React, { Component } from 'react'
import EnsinoSuperior from './Ensino-Superior'

export default class DadosGerais extends Component {
    state = {
        paginaAtual: false
    }

    proximaTela = () => {
        if (this.state.paginaAtual) {
            return <EnsinoSuperior proximaPage={this.proximaPage} />
        } else {
            return <DadosGerais estaPage={this.estaPage}/>
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h2>ETAPA 1: DADOS GERAIS</h2>

            1. Qual o seu nome?
            <p />
            <input />
            <p />

            2. Qual sua idade?
            <p />
            <input />
            <p />

            3. Qual seu email?
            <p />
            <input />
            <p />

            4. Qual sua escolaridade?
            <p />
            <select>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
            </form>
            <p />
            
            </div>
        )
    }
}