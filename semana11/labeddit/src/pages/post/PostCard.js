import React from 'react'
import {useHistory} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Button from '@material-ui/core/Button'
import CommentIcon from '@material-ui/icons/Comment'

const PostCard = (props) => {
    const history = useHistory()

    const handleGoToPost = () => {
        history.push(`/post/${props.post.id}`)
    }

    const upPostVote = (direction) => {
            props.postVote(props.post.id, 1)
    }

    const downPostVote = (direction) => {
            props.postVote(props.post.id, -1)

    }

    return (
        <Card>
            <CardHeader
                title={props.post.title}
                subheader={props.post.username}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {props.post.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div className={'postButtonVotes'}>
                <IconButton onClick={upPostVote}>
                    <ArrowUpwardIcon color={props.post.userVoteDirection == 1 ? "primary" : "disabled"}/>
                </IconButton>
                <p>{props.post.votesCount}</p>
                <IconButton onClick={downPostVote}>
                    <ArrowDownwardIcon color={props.post.userVoteDirection == -1 ? "secondary" : "disabled"}/>
                </IconButton>
                </div>
                <div className={'postButtonComment'}>
                {!props.hideComment && (<Button
                    variant="contained"
                    onClick={handleGoToPost}
                    color="primary"
                    startIcon={<CommentIcon />}
                >
                Comentário
                </Button>)}
                </div>

            </CardActions>
            <hr />
        </Card>
    )
}

export default PostCard