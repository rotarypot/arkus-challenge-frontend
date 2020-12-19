import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs";
import { AlertService } from '@full-fledged/alerts';

declare var $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user_id: String;
  public courses: Object;
  public trainingtypes: Object;
  public training_data$: Observable<any>;

  timeForm = new FormGroup({
    user_id: new FormControl(),
    course_id: new FormControl('', Validators.required),
    trainingtype_id: new FormControl('', Validators.required),
    timespent: new FormControl('', Validators.required)

  })

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _coursesService: CoursesService,
    private _userService: UserService,
    private _alertService: AlertService

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

    this.getTrainingData();


  }

  getTrainingData() {
    this.training_data$ = this._userService.getUserById(this.user_id)
    // notese que NO nos suscribimos al servicio, 
    // usamos el pipe async en el template, para suscribirnos al observable que regresará de la llamada al servicio.
  }


  deleteTraining(id) {

    let confirm = prompt('Do you want to delete this training? \r\nType YES to delete');
    if (confirm == "YES") {
      this._userService.deleteTraining(id).subscribe(res => {
        this._alertService.success('Training was DELETED')
        this.getTrainingData();
      },
        err => {
          this._alertService.danger('Delete FAILED, check logs')
        })
    }
  }

  submitTime() {

    if (this.timeForm.status == 'VALID') {
      const data = this.timeForm.value;
      data.user_id = this.user_id;
      this._userService.updateTraining(data).subscribe(res => {
        this.timeForm.reset();
        this._alertService.info('Training UPDATED');
        this.getTrainingData();

      },
        error => {
          this.timeForm.reset();
          this._alertService.danger('Update FAILED, check logs')

        })

    } else {
      this._alertService.warning('All fields are required')

    }
  }
}
