package com.example.collegeApp.CollegeApplication;
import java.util.List;

public interface CllgAppService {

    String userReg(UserSignUp userSignUp);
    String loginUser(UserLogin userLogin);

    String createCollege(Colleges colleges);
    String createCourses(Courses courses);

    List<Colleges> readColleges();
    List<Courses> readCourses();

    Colleges readPerticularCllg(Long id);
    // boolean deleteColleges(Long id);
}
