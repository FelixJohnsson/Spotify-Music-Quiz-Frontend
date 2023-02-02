import Avatar from '@mui/material/Avatar';
import AccountActionList from './AccountActionList'

import './LeftProfileSideBar.css'

interface ProfileSideBarProps {
    spotifyProfileImage?: string
    spotifyAccountName: string
} 

const LeftProfileSideBar = ({spotifyProfileImage, spotifyAccountName}: ProfileSideBarProps) => {
    return (
        <div className="LeftProfileSideBar-container">
            <h1>
                Profile
            </h1>
            <div className="account-details-container">
                <Avatar alt="Remy Sharp" src={spotifyProfileImage} />
                <p className="account-name">
                    {spotifyAccountName}
                </p>
            </div>
            <div className="account-actions-container">
                <AccountActionList />
            </div>
        </div>
    )
}

export default LeftProfileSideBar