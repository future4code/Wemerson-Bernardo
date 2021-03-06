import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../routes/Coordinator'

export default function Header() {
    const history = useHistory()

    return (
        <div className={'headerPost'}>
            <img src={'https://images2.imgbox.com/7d/c7/F22hds4t_o.gif'} alt={'LabEddit Logo'} width={"600px"} height={"100px"} onClick={() => goToFeed(history)}/>
        </div>
    )
}