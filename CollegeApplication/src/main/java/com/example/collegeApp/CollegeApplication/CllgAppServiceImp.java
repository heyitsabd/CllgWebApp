package com.example.collegeApp.CollegeApplication;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;

@Service
public class CllgAppServiceImp implements CllgAppService {

    @Autowired
    private CourseRepo courseRepo;
    @Autowired
    private CllgRepo cllgRepo;
    @Autowired
    private UserSignUpRepo userSignUpRepo;

    @Override
    public String createCollege(Colleges college_data) {
        if (college_data == null) {
            return "College data cannot be null";
        }
    
        CllgEntity cllgEntity = new CllgEntity();
        CoursesEntity coursesEntity = courseRepo.findByCourseName(college_data.getCourseName());
    
        // Copy properties from Colleges DTO to CllgEntity
        BeanUtils.copyProperties(college_data, cllgEntity);
    
        // Set course fee if course exists
        if (coursesEntity != null) {
            cllgEntity.setCourseFee(coursesEntity.getCourseFee());
        } else {
            cllgEntity.setCourseFee(null);
        }
    
        // Handle image if it exists
        if (college_data.getImage() != null) {
            cllgEntity.setImage(college_data.getImage());
        }
    
        try {
            cllgRepo.save(cllgEntity);
        } catch (Exception e) {
            return "Error creating college: " + e.getMessage();
        }
    
        return "College " + cllgEntity.getCollegeName() + " created";
    }
    

    @Override
    public String createCourses(Courses course_data) {
        CoursesEntity coursesEntity = new CoursesEntity();
        BeanUtils.copyProperties(course_data, coursesEntity);
        courseRepo.save(coursesEntity);
        return "Courses Created";
    }

    @Override
    public List<Colleges> readColleges() {
        
        List<CllgEntity> collegesDataList = cllgRepo.findAll();
        List<Colleges> colleges = new ArrayList<>();
        for (CllgEntity collegesData : collegesDataList) {
            Colleges clg = new Colleges();
            CoursesEntity coursesEntity = courseRepo.findByCourseName(collegesData.getCourseName());
            clg.setId(collegesData.getId());
            clg.setAcNONAC(collegesData.getAcNONAC());
            clg.setAccomodationFee(collegesData.getAccomodationFee());
            if(coursesEntity!=null){
            clg.setCourseFee(coursesEntity.getCourseFee());
            }else{
                clg.setCourseFee(null);
            }
            clg.setCollegeName(collegesData.getCollegeName());
            clg.setCourseName(collegesData.getCourseName());
            clg.setDuration(collegesData.getDuration());
            colleges.add(clg);
        }
        return colleges;
    }

    @Override
    public List<Courses> readCourses() {
        List<CoursesEntity> courseDataList = courseRepo.findAll();
        List<Courses> courses = new ArrayList<>();
        for (CoursesEntity courseData : courseDataList) {
            Courses course = new Courses();
            course.setCourseFee(courseData.getCourseFee());
            course.setCourseName(courseData.getCourseName());
            courses.add(course);
        }
        return courses;
    }

    @Override
    public Colleges readPerticularCllg(Long id) {
        CllgEntity particularCllg = cllgRepo.findById(id).get();

        Colleges clg = new Colleges();
        clg.setAcNONAC(particularCllg.getAcNONAC());
        clg.setAccomodationFee(particularCllg.getAccomodationFee());
        clg.setCollegeName(particularCllg.getCollegeName());
        clg.setCourseName(particularCllg.getCourseName());
        clg.setDuration(particularCllg.getDuration());
        return clg;
    }

    @Override
    public String userReg(UserSignUp userSignUp) {
        try {
            UserSignUpEntity userSignUpEntity = new UserSignUpEntity();
            BeanUtils.copyProperties(userSignUp, userSignUpEntity);
            userSignUpRepo.save(userSignUpEntity);
            return "user data saved successfully";
        } catch (Exception e) {
            return "error";
        }
    }

    @Override
    public String loginUser(UserLogin userLogin) {
        String userName = userLogin.getUserName(); 
        String password = userLogin.getPassword();
        UserSignUpEntity user = userSignUpRepo.findByUserNameAndPassword(userName, password);
        UserSignUpEntity admin = userSignUpRepo.findAdminUser(userName, password);        

        if (user!=null&&admin==null) {
            return "User Logged in";
        } else if(user==null && admin!=null){
            return "Admin Logged in";
        } 
        else {
            return "Invalid credentials";
        }
    }

}
