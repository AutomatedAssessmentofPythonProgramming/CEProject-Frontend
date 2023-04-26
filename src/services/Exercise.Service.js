import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL="https://nutapi.surawit.fish/api/exercise/"
const SUBMIT_URL="https://nutapi.surawit.fish/api/exercise-submit/"
const SUBMISSIONLIST_URL="https://nutapi.surawit.fish/api/submission/" //teamid
const USERSUBMISSION_URL="https://nutapi.surawit.fish/api/submissions/user/"

class ExerciseService{
    createExercise(title,instruction,source_code,config_code,unittest,example_code,code_name){
        return axios.post(API_URL,{title,instruction,source_code,config_code,unittest,example_code,code_name}, { headers: authHeader() })
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch((error) => {
            console.error(error);
          });
    }

    getExercise(exid,teamid){
        return axios.get(API_URL + exid+'/'+teamid,{headers: authHeader() })
    }

    editExercise(title,instruction,source_code,config_code,unittest,exid,example_code,code_name){
        return axios.patch(API_URL+exid,{title,instruction,source_code,config_code,unittest,example_code,code_name},{headers:authHeader()})
    }

    deleteExercise(exid){
        return axios.delete(API_URL + exid,{headers:authHeader()})
    }

    submitExercise(exid,teamid,textfile){
        return axios.post(SUBMIT_URL+exid+'/'+teamid,textfile,{headers:authHeader()})
        .then(response => {
            if(response.data.error == "submission"){
                alert('Your code isn\'t correct.')
            }
            else{console.log(response.data)
                alert('Success! Score '+ response.data.data.points +'/'+response.data.data.maxPoints)
                window.location.href= `/team/${encodeURIComponent(teamid)}`
                return response.data;
            }
            
        })
        .catch((error) => {
            console.error(error);
          });
    }

    getUserSubmission(team_id,user_id){
        return axios.post(USERSUBMISSION_URL,{team_id,user_id},{headers:authHeader()})
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch((error) => {
            console.error(error);
          });
    }

    getSubmissionlist(exerciseid,teamid){
        return axios.get(SUBMISSIONLIST_URL+exerciseid+'/team/'+teamid,{headers:authHeader()})
    }
    //remain 2 get submission method
}

export default new ExerciseService();
