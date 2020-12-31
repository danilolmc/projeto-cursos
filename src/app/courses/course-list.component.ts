import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'ap-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit { 


    _courses: Course[] = [];
    

    constructor(private courseService: CourseService){}

    ngOnInit(): void { 

        this._courses = this.courseService.retrieveAll();

    }
}