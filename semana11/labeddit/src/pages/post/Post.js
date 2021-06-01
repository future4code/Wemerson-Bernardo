import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import {baseUrl} from '../../requests/baseUrl'
import './PostStyled.css'
import LinearProgress from '@material-ui/core/LinearProgress'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Post() {
    useProtectedPage()
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [inputText, setInputText] = useState("")
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        listPosts()
    }, [])

    const listPosts = () => {
        setLoading(true)
        axios.get(`${baseUrl}/posts`, {
            headers: {
            Authorization: localStorage.getItem('token')
            } 
        })
        .then((response) => {
            setPosts(response.data.posts)
            setLoading(false)
        }). catch ((error) => {
            alert("Não foi possível mostrar o feed, tente novemente em instantes.")
        })
    }

    const createPost = async () => {
        const body = {
            text: text,
            title: title
        }
    
        const axiosConfig = {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
    
        try{
        await axios.post(`${baseUrl}/posts`, body, axiosConfig)
            listPosts()
            setText('')
            setTitle('')
          } catch (error) {
            alert("Não foi possível realizar esta operação, tente novamente mais tarde")
            console.log(error)
          }
      }

    const postVote = async (postId, direction) => {
        const axiosConfig = {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
    
        const body = {
          direction: direction
        }
    
        try{
          await axios.put(`${baseUrl}/posts/${postId}/vote`, body, axiosConfig)
          listPosts()
        } catch (error) {
          alert("Não foi possível votar no momento, tente novamente mais tarde!")
        }
       }

       const updateTitle = (e) => {
        setTitle(e.target.value)
      }

      const updateText = (e) => {
        setText(e.target.value)
      }

      const handleInputText = (e) => {
        setInputText(e.target.value)
      }
    
      const filterFeed = () => {
        return posts.filter((post) => {
          const title = post.title.toLowerCase()
          return title.indexOf(inputText.toLowerCase()) > -1
        })
      }

    return (
        <div className="searchContainer">
            <div>
            <div className="searchTitle">
            <TextField 
            placeholder={"Pesquise por Título"}
            value={inputText}
            onChange={handleInputText}
            />
            </div>
            <TextField 
            className={"postTitle"}
            placeholder={"Título do Post"}
            value={title}
            onChange={updateTitle}
            />
            <TextField 
            className={"postText"}
            placeholder={"Insira seu texto aqui"}
            value={text}
            onChange={updateText}
            />
            <Button onClick={createPost} >Publicar Post</Button>
            </div>
            <hr />
            
            {loading && <LinearProgress />}
            {filterFeed().map(post => {
                return(
                <PostCard 
                key={post.id}
                post={post}
                postVote={postVote}
                />
                )
            })}
        </div>
    )
}
