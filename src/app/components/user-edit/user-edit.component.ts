import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user_id: string;
  public user_data: object;
  public courses: object;
  public trainingtypes: object;

  timeForm = new FormGroup({
    user_id: new FormControl(),
    course_id: new FormControl(),
    trainingtype_id: new FormControl(),
    timespent: new FormControl()

  })


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _coursesService: CoursesService,
    private _userService: UserService,
  ) {

  }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(params => {
      this.user_id = params.get('id');
    });

    this._coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    })

    this._coursesService.getTrainingTypes().subscribe(trainingtypes => {
      this.trainingtypes = trainingtypes;
    })

    this.user_data = this._userService.getUserById(this.user_id); // usando pipe async nos hace un observable de esto auto-magicamente weeee...


  }

  submitTime() {

    const data = this.timeForm.value;
    data.user_id = this.user_id;
    this._userService.updateTraining(data).subscribe(res => {
      alert('update succesful!')

    },
      error => {
        alert('update failed')
      })
  }
}
