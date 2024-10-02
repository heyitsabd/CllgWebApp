package com.example.collegeApp.CollegeApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends JpaRepository<CoursesEntity,Long> {
    CoursesEntity findByCourseName(String courseName);
}
