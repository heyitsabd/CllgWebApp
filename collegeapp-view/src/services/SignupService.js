import axios from "axios"

const SIGNUP_BASE_URL = "http://localhost:8080/signUp"

class userSignupService{
    signUpuser(userData){
        return axios.post(SIGNUP_BASE_URL,userData);
    }
}

export default new userSignupService();
