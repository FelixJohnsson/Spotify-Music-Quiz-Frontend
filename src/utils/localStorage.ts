export const saveToLocalStorage = (data: string[] | string) => {
    if (typeof data === "string") {
        localStorage.setItem("spotifyData", data)
    } else {
        data.forEach(item => {
            const key = item.split('=')[0]
            const value = item.split('=')[1]
            localStorage.setItem(key, value)
        })
    }
}
