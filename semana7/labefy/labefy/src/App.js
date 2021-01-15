import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    playlistValue: "",
    playlists: []
  }

  onChangePlaylistValue = (e) => {
    this.setState({ playlistValue: e.target.value })
  }

  componentDidMount = () => {
    this.resultadoPlaylists()
  }

  newPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "wemerson-bernardo-epps"
        }
      }
    )
      .then((res) => {
        this.setState({ playlistValue: "" })
      })
      .catch((err) => {
        this.setState({ playlistValue: "" })
        alert("Não foi possível adicionar a playlist, tente novamente mais tarde!")
      })
  }

  resultadoPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "wemerson-bernardo-epps"
      }
    }
    )
      .then((res) => {
        this.setState({ playlists: res.data.result.list })

      })
      .catch((err) => {
        alert("Não foi possível retornar a playlist solicitada")
      })
  }


  render() {

    return (
      <div>
        <h3>Crie sua playlist</h3>
        <input
          placeholder="Dê um nome à sua playlist"
          value={this.state.playlistValue}
          onChange={this.onChangePlaylistValue}
        />
        <button onClick={this.newPlaylist}>Criar Playlist!</button>

        <div>
          <select>
            <option>Sua Lista de Playlists</option>
            {this.state.playlists.map((playlist) => {
              return (
                <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
              )
            })}
          </select>
        </div>

      </div>
    )
  }
}