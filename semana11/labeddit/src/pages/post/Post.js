import React, { useState } from 'react'
import CommentSection from '../feed/CommentSection'
import PostCard from './PostCard'
import useProtectedPage from '../../hooks/useProtectdPage'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import useRequestData from '../../hooks/useRequestData'
import CreatePost from '../../components/CreatePost'

export default function Post() {
    useProtectedPage()
    const posts = useRequestData([], `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`)
    console.log(posts)

    const postsCards = posts.map((post) => {
        return (<p>{post.id}</p>)
    })

    // const [like, setLike] = useState(false);

    // const [numberOfLikes, setnumberOfLikes] = useState(0);

    // const [sendComment, setSendComment] = useState(false);

    // const [numberOfComments, setNumberOfComments] = useState(0);

    // const [allComents, setAllComments] = useState([]);

    // const onClickCurtida = () => {
    //     if (like) {
    //         setLike(false);
    //         setnumberOfLikes(0);
    //     } else {
    //         setLike(true);
    //         setnumberOfLikes(1);
    //     }
    // };

    // const onClickComentario = () => {
    //     setSendComment(!sendComment);
    // };

    // const enviarComentario = (comentario) => {
    //     setNumberOfComments(numberOfComments + 1);
    //     const newListOfComments = [...allComents, comentario];
    //     setSendComment(false);
    //     setAllComments(newListOfComments);
    // };

    // const commentSection = sendComment ? (
    //     <CommentSection enviarComentario={enviarComentario} />
    // ) : (
    //         allComents.map((comentario) => {
    //             return (
    //                 <div className="commentContainer">
    //                     <p>{comentario}</p>
    //                 </div>
    //             );
    //         })
    //     );

    return (
        <div>
            <PostCard 
            username={"Usuário X"}
            text={"Eu quis dizer, você não quis escutar. Agora não peça, não me faça promessas..."}
            onclick={() => null}
            />
            <CreatePost />
            {postsCards}

            {/* <div className="postContainer">
                <div className="PostHeader">
                    <p>Um usuário Qualquer</p>
                </div>

                <div className="postFooter">
                    <div>
                        <ArrowUpwardIcon />
                        <ArrowDownwardIcon />
                    </div>

                    <CommentSection>
                        <ChatBubbleIcon onClick={onClickComentario}/>
                    </CommentSection>
                </div>
                {commentSection}
            </div> */}
        </div>
    )
}
