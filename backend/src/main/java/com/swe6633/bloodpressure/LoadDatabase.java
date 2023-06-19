package com.swe6633.bloodpressure;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import com.swe6633.bloodpressure.BloodPressureReadingRepository;
import com.swe6633.bloodpressure.models.BloodPressureReading;

@Component
class LoadDatabase implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
    private BloodPressureReadingRepository repository;

    public LoadDatabase(BloodPressureReadingRepository repository) {
	this.repository = repository;
    }
    
    @Override
    public void run(String... args) throws Exception {
	log.info("Preloading " + repository.save(new BloodPressureReading("user", 10.0, 5.4)));
	log.info("Preloading " + repository.save(new BloodPressureReading("user", 25.0, 12.0)));
	log.info("Preloading " + repository.save(new BloodPressureReading("user", 30.0, 31)));
    }
}
