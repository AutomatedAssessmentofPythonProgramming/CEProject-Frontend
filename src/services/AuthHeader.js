
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const access = localStorage.getItem("access_token")
    console.log("Auth header process")
    console.log(user)
        return {
            // 'accept': 'application/json',
            'Authorization': 'Bearer ' + access,
            // 'Content-Type': 'application/json',
            // // 'X-CSRFToken': 'Bearer ' + access,
            // //'X-CSRFToken': csrfToken,
            // 'Access-Control-Allow-Origin' : '*',
            // 'Access-Control-Allow-Methods': '*',
            // 'Access-Control-Allow-Headers': 'Content-Type'
        };
}