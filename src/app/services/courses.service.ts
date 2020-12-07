import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoursesService {
  constructor(
    private http: HttpClient
  ) { }

  getCourses() {
    return this.http.get('http://localhost:3000/courses');
  }
  getTrainingTypes() {
    return this.http.get('http://localhost:3000/trainingtypes');
  }
}