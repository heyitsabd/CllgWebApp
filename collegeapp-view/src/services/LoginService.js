import axios from 'axios';
const LOGIN_BASE_URL = "http://localhost:8080/login"

class LoginService{
    loginUser(userCredentials){
        return axios.post(LOGIN_BASE_URL,userCredentials);
    }
}

export default new LoginService();