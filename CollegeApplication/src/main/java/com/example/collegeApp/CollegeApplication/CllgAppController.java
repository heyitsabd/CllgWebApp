package com.example.collegeApp.CollegeApplication;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

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

    @GetMapping("/colleges/images/{id}")
    public ResponseEntity<byte[]> getImageById(@PathVariable Long id) {
        Colleges img = cllgAppService.readPerticularCllg(id);
        byte[] imageFile = img.getImage();
        return ResponseEntity.ok().body(imageFile);
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
            return cllgAppService.userReg(userSignUp);
        } catch (Exception e) {
            return "Error Occurred: " + e.getMessage();
        }
    }

    @PostMapping("/colleges")
    public String postCollegeData(
            @RequestParam("collegeName") String collegeName,
            @RequestParam("courseName") String courseName,
            @RequestParam("duration") Float duration,
            @RequestParam("acNONAC") Boolean acNONAC,
            @RequestParam("accomodationFee") Long accomodationFee,
            @RequestPart("image") MultipartFile image) {
        Colleges college = new Colleges();
        college.setCollegeName(collegeName);
        college.setCourseName(courseName);
        college.setDuration(duration);
        college.setAcNONAC(acNONAC);
        college.setAccomodationFee(accomodationFee);

        try {
            if (image != null) {
                college.setImage(image.getBytes());
            }
            return cllgAppService.createCollege(college);
        } catch (Exception e) {
            return "Exception occurred: " + e.getMessage();
        }
    }

    @PostMapping("/login")
    public String userLogin(@RequestBody UserLogin userLogin) {
        try {
            return cllgAppService.loginUser(userLogin);
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}
