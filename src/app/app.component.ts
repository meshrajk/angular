import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Course } from './courses/model/course';
import { CoursesService } from './courses/services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {

  courses: Course[] = COURSES;
  loaded = false;
  constructor(private courseService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef
  ) {
  }
  ngDoCheck(): void {
    if (this.loaded){
    this.cd.markForCheck();
      this.loaded = undefined;
    }
  }


  ngOnInit() {
  }

  saveCourse(course: Course) {
    //this.courseService.saveCourse(course);
  }

  onEditCourse() {
    const course = this.courses[0];
    const newCourse = {... course, description: "changes"};
    this.courses[0] = newCourse;
  }
}
