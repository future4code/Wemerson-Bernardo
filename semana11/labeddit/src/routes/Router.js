import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Feed from '../pages/feed/Feed'
import PostComment from '../pages/post/PostComment'
import Error from '../pages/error/Error'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'}>
                    <Login />
                </Route>
                <Route exact path={'/register'}>
                    <Register />
                </Route>
                <Route exact path={'/'}>
                    <Feed />
                </Route>
                <Route exact path={'/post/:postId'}>
                    <PostComment />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router