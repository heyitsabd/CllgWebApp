package com.example.collegeApp.CollegeApplication;

import jakarta.persistence.Lob;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Colleges {
    private Long id;
    private String collegeName;
    private String courseName;
    private Float duration;
    private Boolean acNONAC;
    private Long accomodationFee;
    private Long courseFee;
    @Lob
    private byte[] image;
}
