import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  index: Number;

  @Input()
  noImageTpl: TemplateRef<any>;
  
  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<CourseCardComponent>;


  @Output('courseEmitter')
  courseSelected = new EventEmitter<Course>();

  ngAfterViewInit(): void {
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit image ref",this.images);
  }

  onCourseViewed() {
    console.log("card component - button clicked...");
    this.courseSelected.emit(this.course)
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'begineer'
    }
  }
  isImageVisisble() {
    return this.course.iconUrl
  }
  cardStyles(){
    return {
      'background-image':`url(${this.course.iconUrl})`
    };
  }
}
