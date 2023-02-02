import '../../styles/main.css'
import './loggedIn.css'
import Button from '@mui/material/Button';
import LeftProfileSideBar from '../shared/LeftProfileSideBar'
import MainNavigationSpace from './MainNavigationSpace'

const LoggedIn = () => {
    return (
        <div className="loggedIn-container">
            <LeftProfileSideBar spotifyAccountName='Felix Johnsson' />
            <MainNavigationSpace />
        </div>
    )
}

export default LoggedIn