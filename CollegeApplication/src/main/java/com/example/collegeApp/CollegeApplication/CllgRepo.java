package com.example.collegeApp.CollegeApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CllgRepo extends JpaRepository<CllgEntity,Long> {
    
}
