import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;


  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  @ViewChild(HighlightedDirective, { read: HighlightedDirective })
  hightlighted: HighlightedDirective;

  constructor() {

  }

  ngAfterViewInit() {
    console.log('hightlighted', this.hightlighted);
  }

  onCourseSelected(course: Course) {

  }

  onToggle(isHightlighted) {
    console.log(isHightlighted);
  }

}
