package com.example.collegeApp.CollegeApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSignUpRepo extends JpaRepository<UserSignUpEntity, Long> {
    @Query("SELECT u FROM UserSignUpEntity u WHERE u.userName = ?1 AND u.password = ?2") // Changed to lowercase 'password'
    UserSignUpEntity findByUserNameAndPassword(String userName, String password);
    
}
