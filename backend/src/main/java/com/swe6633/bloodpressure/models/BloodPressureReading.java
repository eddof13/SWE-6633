package com.swe6633.bloodpressure.models;

import java.util.Objects;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;

@Entity
public class BloodPressureReading {
    private @Id @GeneratedValue Long id;
    private String user; // TODO: replace with id association

    // TODO: get timestamps working
    //@CreationTimestamp
    //@Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    //@UpdateTimestamp
    //@Temporal(TemporalType.TIMESTAMP)
    private Date modifyDate;

    private double systolic;
    private double diastolic;

    public BloodPressureReading() {}

    public BloodPressureReading(String userName, double upper, double lower) {
	this.user = userName;
	this.systolic = upper;
	this.diastolic = lower;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public Long getId() {
	return this.id;
    }

    public String getUser() {
	return this.user;
    }

    public void setUser(String userName) {
	this.user = userName;
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

    public void setSystolic(double upper) {
	this.systolic = upper;
    }

    public double getDiastolic() {
	return this.diastolic;
    }

    public double setDiastolic(double lower) {
	return this.diastolic = lower;
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
