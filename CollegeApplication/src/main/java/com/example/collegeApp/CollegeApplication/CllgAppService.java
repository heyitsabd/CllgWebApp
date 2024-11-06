package com.example.collegeApp.CollegeApplication;
import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface CllgAppService {

    String userReg(UserSignUp userSignUp);
    String loginUser(UserLogin userLogin);

    String createCollege(Colleges colleges) throws IOException;
    String createCourses(Courses courses);
    

    List<Colleges> readColleges();
    List<Courses> readCourses();

    Colleges readPerticularCllg(Long id);
    // boolean deleteColleges(Long id);
}
