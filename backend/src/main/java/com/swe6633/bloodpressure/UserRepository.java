package com.swe6633.bloodpressure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.swe6633.bloodpressure.models.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
