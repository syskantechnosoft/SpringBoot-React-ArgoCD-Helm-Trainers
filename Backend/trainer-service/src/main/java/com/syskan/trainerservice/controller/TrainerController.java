package com.syskan.trainerservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.syskan.trainerservice.entity.Trainer;
import com.syskan.trainerservice.service.TrainerService;

@RestController
@RequestMapping("/api/v1/trainers")
@CrossOrigin(origins = "http://localhost:5173")
public class TrainerController {
	@Autowired
	private TrainerService trainerService;

	@GetMapping
	public List<Trainer> findAll() {
		return trainerService.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Trainer> findById(@PathVariable int id) {
		return trainerService.findById(id);
	}

	@GetMapping("/email/{email}")
	public Optional<Trainer> findByEmail(@PathVariable String email) {
		return trainerService.findByEmail(email);
	}

	@PostMapping
	public Trainer save(@RequestBody Trainer trainer) {
		return trainerService.save(trainer);
	}

	@PutMapping("/{id}")
	public Trainer update(@PathVariable int id, @RequestBody Trainer trainer) {
		return trainerService.update(id, trainer);
	}

	@DeleteMapping("/{id}")
	public void delete(int id) {
		trainerService.delete(id);
	}

}
