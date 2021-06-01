import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed } from '../routes/Coordinator'
import './Styled.css'

export default function Header() {
    const history = useHistory()

    return (
        <div className={'headerPost'}>
            <img src={'https://images2.imgbox.com/7d/c7/F22hds4t_o.gif'} 
            alt={'LabEddit Logo'}
            onClick={() => goToFeed(history)}
            />
        </div>
    )
}