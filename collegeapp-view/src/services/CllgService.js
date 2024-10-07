import axios from 'axios';
const COLLEGE_BASE_URL = "http://localhost:8080/colleges"

 class CllgService{
    saveCllg(cllgData){
        console.log(cllgData)
        return axios.post(COLLEGE_BASE_URL,cllgData)
    }

    getCllg(){
        return axios.get(COLLEGE_BASE_URL)
    }
}

export default new CllgService();
