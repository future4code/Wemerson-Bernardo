import React, { useEffect, useState } from 'react'
import './PostStyled.css'
import LinearProgress from '@material-ui/core/LinearProgress'
import PostCard from './PostCard'
import useProtectedPage from '../../hooks/useProtectdPage'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {baseUrl} from '../../hooks/baseUrl'

export default function Post() {
    useProtectedPage()
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
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
            setText('')
            setTitle('')
            listPosts()
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
          alert("Não foi possível votar no momento, tento novamente mais tarde!")
        }
       }

       const updateTitle = (e) => {
        setTitle(e.target.value)
      }

      const updateText = (e) => {
        setText(e.target.value)
      }
    

    return (
        <div>
            <div className={'postCreate'}>
            <TextField 
            className={'postTitle'}
            placeholder={"Título do Post"}
            value={title}
            onChange={updateTitle}
            />
            <TextField 
            className={'postText'}
            placeholder={"Insira seu texto aqui"}
            value={text}
            onChange={updateText}
            />
            <Button onClick={createPost} >Publicar Post</Button>
            </div>
            <hr />
            
            {loading && <LinearProgress />}
            {posts.map(post => {
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