

// ** Headers
const getHeaders = () => {
    return {
        // "x-auth-token": `bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
        "content-type": "application/json"
    }
}

export default getHeaders