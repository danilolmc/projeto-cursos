import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'ap-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit { 


    _courses: Course[] = [];
    

    ngOnInit(): void { 

        this._courses = [
            {
                id: 0,
                name: 'Angular Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: "XPS-233",
                duration: 120,
                rating: 4.5,
                releaseDate: 'November,2,2019'
            }
        ]

    }
}