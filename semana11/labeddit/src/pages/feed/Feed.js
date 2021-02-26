import React from 'react'
import Header from '../../components/Header'
import Post from '../post/Post'
import useProtectedPage from '../../hooks/useProtectdPage'



export default function Feed() {
    useProtectedPage()

    return (
        <div>
     <Header />
     <Post />
        </div>
    )
}
