export const getSpotifyData = async (accessToken: string) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.spotify.com/v1/me`,{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json"
                }
        })
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
        .catch(err => {
            reject(err)
        }
        )
    })
}

