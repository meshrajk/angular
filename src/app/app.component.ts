import { Component, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  courses = COURSES;

  constructor(private courseService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {
  }

  ngOnInit() {
  }

  saveCourse(course: Course) {
    this.courseService.saveCourse(course);
  }
  onEditCourse(){
    const course = this.courses[0];
    const newCourse = {...course};
    newCourse.description = 'New Value!';
    this.courses[0] = newCourse;
  }
}
