package com.swe6633.bloodpressure.models;

import java.util.Objects;
import java.util.Date;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;

@Entity
public class BloodPressureReading {
    private @Id @GeneratedValue Long id;
    
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifyDate;

    private double systolic;
    private double diastolic;

    public BloodPressureReading() {}

    public BloodPressureReading(User user, double systolic, double diastolic) {
	this.user = user;
	this.systolic = systolic;
	this.diastolic = diastolic;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public Long getId() {
	return this.id;
    }

    public String getUserName() {
	return this.user.getUsername();
    }

    public void setUser(User user) {
	this.user = user;
    }

    public Date getCreateDate() {
	return this.createDate;
    }

    public Date getModifyDate() {
	return this.modifyDate;
    }

    public double getSystolic() {
	return this.systolic;
    }

    public void setSystolic(double systolic) {
	this.systolic = systolic;
    }

    public double getDiastolic() {
	return this.diastolic;
    }

    public double setDiastolic(double diastolic) {
	return this.diastolic = diastolic;
    }

    @Override
    public boolean equals(Object o) {

	if (this == o)
	    return true;
	if (!(o instanceof BloodPressureReading))
	    return false;
	BloodPressureReading reading = (BloodPressureReading) o;
	return Objects.equals(this.id, reading.id) && Objects.equals(this.diastolic, reading.diastolic)
	    && Objects.equals(this.systolic, reading.systolic);
    }

    @Override
    public int hashCode() {
	return Objects.hash(this.id, this.diastolic, this.systolic);
    }

    @Override
    public String toString() {
	return "BloodPressureReading{" + "id=" + this.id + ", systolic='" + this.systolic + '\'' + ", diastolic='" + this.diastolic + '\'' + '}';
    }
}
