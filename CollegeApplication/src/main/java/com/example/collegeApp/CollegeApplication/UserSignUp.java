package com.example.collegeApp.CollegeApplication;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSignUp {
    private String userName;
    private String password;
    private String name;
}
