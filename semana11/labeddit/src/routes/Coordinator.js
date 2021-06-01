export const goToLogin = (history) => {
    history.push('/login')
}

export const goToRegister = (history) => {
    history.push('/register')
}

export const goToFeed = (history) => {
    history.push('/')
}

export const goToDetail = (history, postId) => {
    history.push(`/post/${postId}`)
}