import React, { useState } from 'react'
import axios from 'axios'

export default function CreatePost() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()

        // const body = {
        //     name: this.state.name,
        //     email: this.state.email
        // }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                clear()
            }).catch((err) => alert("Ops!"))
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input
                    onChange={onChange}
                    name={"username"}
                    value={form.username}
                    placeholder={"Digite seu usuário"}
                    type={"text"} />
                <input
                    onChange={onChange}
                    name={"text"}
                    value={form.text}
                    placeholder={"Digite qualquer coisa aqui!"}
                    type={"text"} />
                <button>
                    type={"submit"}
                </button>
            </form>
        </div>
    )
}