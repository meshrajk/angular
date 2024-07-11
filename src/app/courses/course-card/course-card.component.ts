import {
    AfterContentChecked,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnChanges, AfterContentChecked {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;


    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private courseService: CoursesService,
        @Attribute('type') private type: string
    ) {
        console.log("constructor", this.type);
    }
    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }

    ngOnInit() {
        console.log("ngOnInit", this.course);
    }

    onSaveClicked(description: string) {
        this.courseEmitter.emit({ ...this.course, description });
    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }
}
