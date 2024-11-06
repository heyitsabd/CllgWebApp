package com.example.collegeApp.CollegeApplication;
import java.util.Base64;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Entity
@Data
@Table(name="cllg_db",
uniqueConstraints = {@UniqueConstraint(columnNames = {"collegeName", "courseName"})})
public class CllgEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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