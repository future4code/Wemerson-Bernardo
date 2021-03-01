import React, { useEffect, useState } from "react"
import './CommentSection.css'
import { useHistory, useParams } from 'react-router-dom'
import PostCard from './PostCard'
import { goToLogin, goToFeed } from '../../routes/Coordinator'
import axios from 'axios'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CommentList from './PostCommentList'

const CommentSection = (props) => {
  const [postDetail, setPostDetail] = useState(null)
  const [comment, setComment] = useState("")
  const history = useHistory()
  const params = useParams()

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      goToLogin(history)
    } else if (!params.postId) {
      goToFeed(history)
    }
  }, [])

  useEffect(() => {
    postDetails()
  }, [])

  const postDetails = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setPostDetail(response.data.post)
      })
  }

  const updateComment = (e) => {
    setComment(e.target.value)
  }

  const createComment = async () => {
    const body = {
      text: comment
    }

    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }

    try{
    await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment`, body, axiosConfig)
        setComment('')
        postDetails()
      } catch (error) {
        alert("Não foi possível realizar esta operação, tente novamente mais tarde")
        console.log(error)
      }
  }

   const commentVote = async (commentId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }

    const body = {
      direction: direction
    }

    try{
      await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${commentId}/vote`, body, axiosConfig)
      postDetails()
    } catch (error) {
      alert("Não foi possível votar no momento, tento novamente mais tarde!")
    }
   }

  return (
    <div className="commentContainer">
      {postDetail !== null && <PostCard post={postDetail} hideComment />}
      <TextField 
      placeholder={'insert your comment'}
      value={comment}
      onChange={updateComment}
      />
      <Button onClick={createComment} >Send Comment</Button>
      <List>
        {postDetail && postDetail.comments.map((comment) => {
          return(
            <CommentList 
            comment={comment}
            commentVote={commentVote}
            />
          )
        })}
      </List>
    </div>
  );
};

export default CommentSection;
