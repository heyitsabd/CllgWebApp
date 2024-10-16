package com.example.collegeApp.CollegeApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSignUpRepo extends JpaRepository<UserSignUpEntity, Long> {

    @Query("SELECT u FROM UserSignUpEntity u WHERE u.userName = ?1 AND u.isAdmin = false AND u.password = ?2")
    UserSignUpEntity findByUserNameAndPassword(String userName, String password);
    
    @Query("SELECT au FROM UserSignUpEntity au WHERE au.userName = ?1 AND au.isAdmin = true AND au.password = ?2")
    UserSignUpEntity findAdminUser(String userName, String password);

}
