import React, { Component } from 'react'
import NextPage from './Component/nextPage'
import Playlists from './Component/playlists'
import PlaylistDetail from './Component/playlistDetails'

export default class App extends Component {
  state = {
    newPage: "nextPage"
  }

  changePage = () => {
    if (this.state.newPage === "nextPage") {
      this.setState({ newPage: "playlists"})
    } else {
      this.setState ({ newPage: "nextPage"})
    }
  }


  render() {

    return (
      <div>
       <button onClick={this.changePage}>Minhas Playlists</button>
       {this.state.newPage === "nextPage" ? <NextPage /> : <Playlists />}
      </div>
    )
  }
}