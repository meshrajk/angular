import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';


let counter = 0;

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  courses$: Observable<Course[]>;
  id:number;
  constructor(private http:HttpClient) {
    counter++;
    this.id = counter;
    console.log("Create courseservice", counter)
   }
   
   loadCourses(): Observable<Course[]>{

    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    this.courses$ = this.http.get<Course[]>('/api/courses', { params });
    return this.courses$

   }

   saveCourse(course:Course) {
    const headers = new HttpHeaders()
    .set('X-auth', 'userId');

    this.http.put(`/api/courses/${course.id}`, course, {headers:headers})
    .subscribe(
      ()=> console.log('Course saved!')
    );
   }
}
