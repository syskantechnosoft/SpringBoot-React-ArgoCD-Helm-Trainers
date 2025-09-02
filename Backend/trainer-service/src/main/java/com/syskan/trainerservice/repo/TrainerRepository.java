package com.syskan.trainerservice.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.syskan.trainerservice.entity.Trainer;

public interface TrainerRepository extends JpaRepository<Trainer, Integer> {
	
	Optional<Trainer> findByEmail(String email);

}
