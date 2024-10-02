package com.example.collegeApp.CollegeApplication;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Courses {
    @Getter @Setter private String courseName;
    @Getter @Setter private Long courseFee; 
}
