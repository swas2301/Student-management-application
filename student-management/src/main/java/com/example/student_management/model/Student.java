

package com.example.student_management.model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String age;

    @Column(name = "student_class", nullable = false)  // Avoids SQL keyword conflict
    private String studentClass;

    @Column(nullable = false)
    private Long phoneNumber;  // Changed to Long to store numeric phone numbers

    // Default Constructor
    public Student() {}

    // Parameterized Constructor
    public Student(String name, String age, String studentClass, Long phoneNumber) {
        this.name = name;
        this.age = age;
        this.studentClass = studentClass;
        this.phoneNumber = phoneNumber;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age='" + age + '\'' +
                ", studentClass='" + studentClass + '\'' +
                ", phoneNumber=" + phoneNumber +
                '}';
    }
}