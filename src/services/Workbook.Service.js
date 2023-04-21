import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL="https://nutapi.surawit.fish/api/workbook/"

class WorkbookService{
    createWorkbook(team,exercise,week,opentime,duetime,isOpen){
        return axios.post(API_URL,{team,exercise,week,opentime,duetime,isOpen}, { headers: authHeader() })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.error(error);
        })
    }

    getWorkbook(workbookid){
        return axios.get(API_URL+workbookid,{ headers: authHeader() })
    }

    editWorkbook(workbookid,team,exercise,week,opentime,duetime,isOpen){
        return axios.patch(API_URL+workbookid,{team,exercise,week,opentime,duetime,isOpen},{headers:authHeader()})
    }

    deleteWorkbook(workbookid){
        return axios.delete(API_URL+workbookid,{ headers: authHeader() })
    }
}

export default new WorkbookService();