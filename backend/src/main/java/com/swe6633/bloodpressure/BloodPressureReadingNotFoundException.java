package com.swe6633.bloodpressure;

class BloodPressureReadingNotFoundException extends RuntimeException {

  BloodPressureReadingNotFoundException(Long id) {
    super("Could not find reading " + id);
  }
}
