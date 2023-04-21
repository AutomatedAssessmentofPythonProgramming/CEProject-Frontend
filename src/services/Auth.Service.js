import axios from "axios";
import authHeader from "./AuthHeader";
import jwt_decode from 'jwt-decode';

const API_URL = 'https://nutapi.surawit.fish/auth/'

class AuthService{
    login(email, password) {
        console.log(email,password)
        return axios.post(API_URL + 'login/', {
            email, 
            password
        }, { headers: authHeader() })
        .then(response => {
            console.log(response.data)
            if (response.data.tokens) {
                const { access, refresh } = response.data.tokens;
                // console.log({access,refresh})
              localStorage.setItem('access_token', access);
              localStorage.setItem('refresh_token', refresh);
              const decoded = jwt_decode(access);
              console.log(decoded);
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log(localStorage.getItem("user"))
            }

            return response.data;
        })
        .catch((error) => {
            console.error(error);
          });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email, username, password) {
        console.log(email,username,password)
        return axios.post(API_URL + "register/", {
            email,
            username,
            password
        }, { headers: authHeader() })
        .then(response=>{
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.error(error);
          });;
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }

    getUserProfile(){
        return axios.get(API_URL+"user/profile/",{headers: authHeader() })
    }

    editUserProfile(username,email,firstname,lastname,studentid){
        return axios.patch(API_URL+"user/profile/",{username,email,firstname,lastname,studentid},{headers: authHeader() })
    }
}

export default new AuthService();