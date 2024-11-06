import axios from 'axios';

const COLLEGE_BASE_URL = "http://localhost:8080/colleges";
const COLLEGE_IMAGE_URL = "http://localhost:8080/colleges/images";

class CllgService {
    // Method to save college data with an image
    saveCllg(cllgData) {
        return axios.post(COLLEGE_BASE_URL, cllgData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    
    // Method to get a list of all colleges
    getCllg() {
        return axios.get(COLLEGE_BASE_URL);
    }

    // Method to fetch a specific college image by ID
    getCllgImage(id) {
        return axios.get(`${COLLEGE_IMAGE_URL}/${id}`, {
            responseType: "blob",
        });
    }
}

export default new CllgService();
