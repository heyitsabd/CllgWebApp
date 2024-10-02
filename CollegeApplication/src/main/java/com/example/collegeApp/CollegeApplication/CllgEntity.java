package com.example.collegeApp.CollegeApplication;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Data
@Entity
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
    
    // Reference to course fee directly
    private Long courseFee;  // Direct reference to course fee
}