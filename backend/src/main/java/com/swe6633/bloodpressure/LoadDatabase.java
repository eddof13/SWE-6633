package com.swe6633.bloodpressure;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import com.swe6633.bloodpressure.models.Role;
import com.swe6633.bloodpressure.models.ERole;

@Component
class LoadDatabase implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
    private RoleRepository roleRepository;

    public LoadDatabase(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
    
    @Override
    public void run(String... args) throws Exception {
        log.info("Preloading " + roleRepository.save(new Role(ERole.ROLE_USER)));
        log.info("Preloading " + roleRepository.save(new Role(ERole.ROLE_MODERATOR)));
        log.info("Preloading " + roleRepository.save(new Role(ERole.ROLE_ADMIN)));
    }
}
