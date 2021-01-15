import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    //artist: "",
    title: ""
  }

  // onChangeArtist = (e) => {
  //   this.setState({artist: e.target.value})
  // }

  onChangeTitle = (e) => {
    this.setState({title: e.target.value})
  }

  getLyricSong = () => {
    axios.get("https://api.lyrics.ovh/v1/title").then((resposta) => {
      this.setState({
       // artist: resposta.data.artist,
        title: resposta.data.title
      })
    }).catch((erro) => {
      alert("Não foi possível localizar a letra desejada!")
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      
        {/* <h3>Artista:</h3>
        <input placeholder="Nome do Artista" value={this.state.artist} onChange={this.onChangeArtist}></input> */}

        <h3>Música:</h3>
        <input placeholder="Nome da Faixa" value={this.state.title} onChange={this.onChangeTitle}></input>

        <button onClick={this.getLyricSong}>Gerar Letra</button>

        <p></p>
        <p></p>
      </div>
    )
  }
}
