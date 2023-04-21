export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const access = localStorage.getItem("access_token")
    console.log("Auth header process")
    console.log(user.accessToken)
    if (user && user.accessToken) {
        return {
            //'X-CSRFToken': user.accessToken,
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        };
    } else {
        return {};
    }
}