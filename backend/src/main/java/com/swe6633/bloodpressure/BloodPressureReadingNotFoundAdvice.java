package com.swe6633.bloodpressure;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class BloodPressureReadingNotFoundAdvice {

  @ResponseBody
  @ExceptionHandler(BloodPressureReadingNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String readingNotFoundHandler(BloodPressureReadingNotFoundException ex) {
    return ex.getMessage();
  }
}
