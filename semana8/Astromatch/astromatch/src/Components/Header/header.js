import React from 'react'
import {HeaderStyle, HeaderLogo} from './styled'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum';


const Header = () => {
    return (
        <HeaderStyle>
        <PersonIcon />
        <HeaderLogo img src="https://www.volocity.org/wp-content/uploads/2017/01/passion-icon.png" 
        alt="Astromatch Logo"
        />
        <ForumIcon />
        </HeaderStyle>
    )

}

export default Header