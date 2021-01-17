import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default class Playlists extends Component {
    state = {
        playlists: [],
        thisPage: "playlist",
        playlistId: "",
        songName: "",
        artist: "",
        url: ""
    }

    onChangeSongName = (e) => {
      this.setState({ songName: e.target.value })
    }

    onChangeArtist = (e) => {
      this.setState({ artist: e.target.value })
    }

    onChangeUrl = (e) => {
      this.setState({ url: e.target.value })
    }

    componentDidMount = () => {
        this.resultadoPlaylists()
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

      playlistDeletion = (id) => {
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
                headers: {
                    Authorization: "wemerson-bernardo-epps"
              }
              }

            )
            .then(() => {
              alert("Playlist apagada com sucesso!");
              this.resultadoPlaylists();
            })
            .catch(() => {
              alert("Ops, ocorreu um erro! Tente novamente mais tarde...");
            });
        }

      changePage = playlistId => {
        if (this.state.thisPage === "playlist") {
          this.setState({thisPage: "playlistDetail", playlistId: playlistId})
        } else {
          this.setState({thisPage: "playlist", playlistId: ""})
        }
      }

      handleSearchPlaylist = () => {
        const body = {
        songName: this.state.songName,
        artist: this.state.artist,
        url: this.state.url
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/playlistId/tracks", 
        body,
        {
          headers: {
            Authorization: "wemerson-bernardo-epps"
          }
        }
        ).then((res) => {
          this.setState({ songName: "", artist: "", url: "" })
        }).catch((err) => {
          this.setState({ songName: "", artist: "", url: "" })
          alert("Não foi possível adicionar a música desejada!")
        })
      }

    render () {
        return (
            <div>
        {this.state.thisPage === "playlist" ? (
          <div>
            <ul>
              {this.state.playlists.length === 0 && <div>Loading...</div>}
              {this.state.playlists.map(playlist => {
                return (
                  <li>
                    <div onClick={() => this.changePage(playlist.id)}>
                      {playlist.name}
                    </div>
                    <button
                      onClick={() => this.playlistDeletion(playlist.id)}>
                      X
                    </button>
                  </li>
                )
              })}
            </ul>
            <hr />
            <h4>Adicionar Música</h4>
            <input
              placeholder="Nome da música"
              type="text"
              value={this.state.songName}
              onChange={this.onChangeSongName}
            />
            <input
              placeholder="Nome do artista"
              type="text"
              value={this.state.artist}
              onChange={this.onChangeArtist}
            />
            <input
              placeholder="Url da música"
              type="text"
              value={this.state.url}
              onChange={this.onChangeUrl}
            />
            <button onClick={this.handleSearchPlaylist}>Salvar Música</button>
          </div>
        ) : (
          <button playlistId={this.state.playlistId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}