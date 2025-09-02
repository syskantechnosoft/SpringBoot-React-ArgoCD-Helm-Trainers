// src/services/trainerService.js
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1",
});

export const listTrainers = async () => (await api.get("/trainers")).data;
export const addTrainer = async (t) => (await api.post("/trainers", t)).data;
export const updateTrainer = async (id, t) => (await api.put(`/trainers/${id}`, t)).data;
export const deleteTrainer = async (id) => await api.delete(`/trainers/${id}`);
