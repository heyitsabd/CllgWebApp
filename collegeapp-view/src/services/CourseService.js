import axios from 'axios';
const COURSE_BASE_URL = "http://localhost:8080/courses"

class CourseService{
    getCourses(){
        return axios.get(COURSE_BASE_URL)
    }
}

export default new CourseService();