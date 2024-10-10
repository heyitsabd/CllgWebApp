package com.example.collegeApp.CollegeApplication;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("http://localhost:3000/")
public class CllgAppController {

    @Autowired
    CllgAppService cllgAppService;

    @GetMapping("/")
    public String getLandingPage() {
        return "Hii this is landing page";
    }

    @GetMapping("colleges")
    public List<Colleges> getCollegeName() {
        return cllgAppService.readColleges();
    }

    @GetMapping("courses")
    public List<Courses> getCourses() {
        return cllgAppService.readCourses();
    }

    @GetMapping("/colleges/{id}")
    public Colleges getMethodName(@PathVariable Long id) {
        return cllgAppService.readPerticularCllg(id);
    }

    @PostMapping("/courses")
    public String postCourseData(@RequestBody List<Courses> coursesData) {
        for (Courses course : coursesData) {
            cllgAppService.createCourses(course);
        }
        return "Saved successfully";
    }

    @PostMapping("/signUp")
    public String postUserData(@RequestBody UserSignUp userSignUp) {
        try {
            cllgAppService.userReg(userSignUp);
        return "Saved Successfully";
        } catch (Exception e) {
           return "Error Occured";
        }  
    }
    

    // @PostMapping("/colleges")

    // public String postCollegeData(@RequestBody List<Colleges> colleges) {
    // try {
    // for (Colleges cllg : colleges) {
    // cllgAppService.createCollege(cllg);
    // }
    // return "Saved cllg data successfully :)";
    // } catch (Exception e) {
    // return "exception occured";
    // }

    // }

    @PostMapping("/colleges")
    public String postCollegeData(@RequestBody Colleges college) { // Changed to accept a single Colleges object
        try {
            cllgAppService.createCollege(college); // Saving a single college object
            return "Saved college data successfully :)";
        } catch (Exception e) {
            return "Exception occurred";
        }
    }

    @PostMapping("/login")
    public String userLogin(@RequestBody UserLogin userLogin) {
        try {
             
             return cllgAppService.loginUser(userLogin);
        } catch (Exception e) {
            return "error";
        }
    }
    

}
