import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL="https://nutapi.surawit.fish/api/team/"
const ALLTEAM_URL="https://nutapi.surawit.fish/api/team-list/"
const ADDMEMBER_URL="https://nutapi.surawit.fish/api/add-member/"
class TeamService{

    getAllTeam(){
        return axios.get(ALLTEAM_URL,{ headers: authHeader() })
    }

    createTeam(name,detail){
        return axios.post(API_URL,{name,detail}, { headers: authHeader() })
        .then(response => {
            console.log(response.data)
            if(response.data.team){
                const pk=response.data.team[0]
                window.location.href= `/team/${encodeURIComponent(pk)}`
            }

            return response.data;
        })
        .catch((error) => {
            console.error(error);
          });
    }

    getTeam(teamid){
        return axios.get(API_URL + teamid,{headers: authHeader() })
    }

    editTeam(name,detail,teamid){
        return axios.patch(API_URL+teamid,{name,detail},{headers:authHeader()})
    }

    deleteTeam(teamid){
        return axios.delete(API_URL + teamid,{headers:authHeader()})
    }

    getTeamMembers(teamid){
        return axios.get(API_URL+teamid+'/members/',{headers:authHeader()})
    }

    getTeamExercise(teamid){
        return axios.get(API_URL+teamid+'/exercises/',{headers:authHeader()})
    }

    addTeamMember(code){
        return axios.post(ADDMEMBER_URL,code,{headers:authHeader()})
    }
}

export default new TeamService();