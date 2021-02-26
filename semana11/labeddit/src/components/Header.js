import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../routes/Coordinator'
import './Header.css'

export default function Header() {
    const history = useHistory()

    return (
        <div className='appBar'>
            <p onClick={() => goToFeed(history)}>LabEddit</p>
            <button onClick={() => goToLogin(history)} className='headerButton'>LOGIN</button>
        </div>
    );
}