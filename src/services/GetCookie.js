export default function GetCookie(){
    const getCookie = (name) => {
        console.log("getCookie")
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
      
    const getCSRFToken = () => {
        console.log("getCSRFToken")
        return getCookie('csrftoken');
    }

    return getCSRFToken()
}