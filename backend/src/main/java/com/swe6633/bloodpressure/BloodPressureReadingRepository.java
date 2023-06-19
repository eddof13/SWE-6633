package com.swe6633.bloodpressure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.swe6633.bloodpressure.models.BloodPressureReading;

public interface BloodPressureReadingRepository extends JpaRepository<BloodPressureReading, Long> {

}
