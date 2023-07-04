package com.swe6633.bloodpressure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.swe6633.bloodpressure.models.Role;
import com.swe6633.bloodpressure.models.ERole;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
 Optional<Role> findByName(ERole name);
}
