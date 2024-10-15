package com.example.collegeApp.CollegeApplication;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserSignUp {
    private String userName;
    private String password;
    private String name;
    private Boolean isAdmin;
}
