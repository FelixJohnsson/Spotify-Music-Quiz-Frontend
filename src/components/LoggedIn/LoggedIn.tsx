import { useEffect, useState } from 'react'

import '../../styles/main.css'
import './loggedIn.css'
import LeftProfileSideBar from '../shared/LeftProfileSideBar'
import MainNavigationSpace from './MainNavigationSpace'
import { getSpotifyData } from '../../utils/spotify'
import { useParams, useNavigate } from 'react-router-dom';


const LoggedIn = () => {
    const navigate = useNavigate();
    const { tokens } = useParams();
    const [spotifyData, setSpotifyData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const handleSpotifyData = async () => {
        if(!tokens){
            return navigate('/login');
        }
        const arrayOfTokens = tokens?.split('&')
        const res = await getSpotifyData(arrayOfTokens[0].split('=')[1])
        setSpotifyData(res)
        setLoading(false)
    }

    useEffect(() => {
        handleSpotifyData()
    }, [])

    return (
        <div className="loggedIn-container">
            { !loading ? <LeftProfileSideBar 
                spotifyAccountName={spotifyData.display_name}
                spotifyProfileImage={spotifyData.images[0].url} 
            /> : null }
            <MainNavigationSpace />
        </div>
    )
}

export default LoggedIn