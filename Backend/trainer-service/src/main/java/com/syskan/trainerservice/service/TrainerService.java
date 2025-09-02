package com.syskan.trainerservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.syskan.trainerservice.entity.Trainer;
import com.syskan.trainerservice.repo.TrainerRepository;

@Service
public class TrainerService {

	private TrainerRepository trainerRepository;

	public TrainerService(TrainerRepository trainerRepository) {
		super();
		this.trainerRepository = trainerRepository;
	}

	public List<Trainer> findAll() {
		return trainerRepository.findAll();
	}

	public Optional<Trainer> findById(int id) {
		return trainerRepository.findById(id);
	}

	public Optional<Trainer> findByEmail(String email) {
		return trainerRepository.findByEmail(email);
	}

	public Trainer save(Trainer trainer) {
		return trainerRepository.save(trainer);
	}

	public Trainer update(int id, Trainer trainer) {
		return trainerRepository.save(trainer);
	}

	public void delete(int id) {
		trainerRepository.deleteById(id);
	}

}
