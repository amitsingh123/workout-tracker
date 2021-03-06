import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutApiService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getWorkouts() {
    return this.http.get<any[]>(`${this.baseUrl}/workouts`);
  }

  getWorkoutsPaged(currPage, pageSize) {
    return this.http.get<any[]>(`${this.baseUrl}/workouts?_page=${currPage}&_limit=${pageSize}`);
  }

  getWorkout(id) {
    return this.http.get<any>(`${this.baseUrl}/workouts/${id}`);
  }

  addWorkout(workout: any) {
    return this.http.post(`${this.baseUrl}/workouts`, workout);
  }

  updateWorkout(workout: any) {
    return this.http.put(`${this.baseUrl}/workouts/${workout.id}`, workout);
  }

  saveWorkout(workout: any) {
    if (workout.id) {
      return this.updateWorkout(workout);
    } else {
      return this.addWorkout(workout);
    }
  }

  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/workouts/${id}`);
  }

  getLocation() {
    return this.http.get<any>(`${this.baseUrl}/locations`);
  }
  searchLocations(searchTerm) {
    return this.http.get<any>(`${this.baseUrl}/locations?q=${searchTerm}`);
  }

  getPerfTargets() {
    return this.http.get(`${this.baseUrl}/performanceTargets`);
  }

  savePerfTargets(perfTargets: any) {
    return this.http.put(`${this.baseUrl}/performanceTargets`, perfTargets);
  }
}

