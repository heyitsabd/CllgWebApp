import axios from 'axios';
const COLLEGE_BASE_URL = "http://localhost:8080/colleges";

class CllgService {
    saveCllg(cllgData) {
        return axios.post(COLLEGE_BASE_URL, cllgData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    

    getCllg() {
        return axios.get(COLLEGE_BASE_URL);
    }
}

export default new CllgService();
