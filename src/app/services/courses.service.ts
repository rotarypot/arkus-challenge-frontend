import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  getCourses() {
    return this.http.get(environment.API_URL + 'courses');
  }
  getTrainingTypes() {
    return this.http.get(environment.API_URL + 'trainingtypes');
  }
}