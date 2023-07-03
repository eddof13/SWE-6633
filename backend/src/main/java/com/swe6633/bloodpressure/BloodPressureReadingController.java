package com.swe6633.bloodpressure;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import com.swe6633.bloodpressure.models.BloodPressureReading;
import com.swe6633.bloodpressure.models.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
class BloodPressureReadingController {

  private final BloodPressureReadingRepository repository;
  
  @Autowired UserRepository userRepository;

  BloodPressureReadingController(BloodPressureReadingRepository repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @GetMapping("/api/blood-pressure-readings")
  List<BloodPressureReading> all() {
    UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    User user = userRepository.findByUsername(userDetails.getUsername())
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
    return user.getBloodPressureReadings();
  }
  // end::get-aggregate-root[]

  @PostMapping("/api/blood-pressure-readings")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  BloodPressureReading newReading(@RequestBody BloodPressureReading newReading) {
    UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    User user = userRepository.findByUsername(userDetails.getUsername())
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
    newReading.setUser(user);
    return repository.save(newReading);
  }

  // Single item
  
  @GetMapping("/api/blood-pressure-readings/{id}")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  BloodPressureReading one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new BloodPressureReadingNotFoundException(id));
  }

  @PutMapping("/api/blood-pressure-readings/{id}")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
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

  @DeleteMapping("/api/blood-pressure-readings/{id}")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  void deleteReading(@PathVariable Long id) {
    repository.deleteById(id);
  }
}
