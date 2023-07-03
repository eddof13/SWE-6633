package com.swe6633.bloodpressure.models;

import java.util.HashSet;
import java.util.Set;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();
  
  @OneToMany(mappedBy = "user")
  private List<BloodPressureReading> blood_pressure_readings;

  public User() {
  }

  public User(String username, String email, String password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  
  public Long getId() {
    return this.id;
  }

  public String getUsername() {
    return this.username;
  }
  
  public String getEmail() {
      return this.email;
  }
  
  public String getPassword() {
      return this.password;
  }
  
  public Set<Role> getRoles() {
      return this.roles;
  }
  
  public List<BloodPressureReading> getBloodPressureReadings() {
      return this.blood_pressure_readings;
  }
  
  public void setRoles(Set<Role> roles) {
      this.roles = roles;
  }
}