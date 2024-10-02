package com.example.collegeApp.CollegeApplication;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Colleges {
    private String collegeName;
    private String courseName;
    private Float duration;
    private Boolean acNONAC;
    private Long accomodationFee;
}
