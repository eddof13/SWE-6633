package com.swe6633.bloodpressure;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swe6633.bloodpressure.models.BloodPressureReading;

@RestController
class BloodPressureReadingController {

  private final BloodPressureReadingRepository repository;

  BloodPressureReadingController(BloodPressureReadingRepository repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/blood-pressure-readings")
  List<BloodPressureReading> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]

  @PostMapping("/blood-pressure-readings")
  BloodPressureReading newReading(@RequestBody BloodPressureReading newReading) {
    return repository.save(newReading);
  }

  // Single item
  
  @GetMapping("/blood-pressure-readings/{id}")
  BloodPressureReading one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new BloodPressureReadingNotFoundException(id));
  }

  @PutMapping("/blood-pressure-readings/{id}")
  BloodPressureReading replaceReading(@RequestBody BloodPressureReading newReading, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(reading -> {
        reading.setSystolic(newReading.getSystolic());
        reading.setDiastolic(newReading.getDiastolic());
        return repository.save(reading);
      })
      .orElseGet(() -> {
        newReading.setId(id);
        return repository.save(newReading);
      });
  }

  @DeleteMapping("/blood-pressure-readings/{id}")
  void deleteReading(@PathVariable Long id) {
    repository.deleteById(id);
  }
}
