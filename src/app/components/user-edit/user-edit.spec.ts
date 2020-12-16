import { Component } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms"
import { RouterTestingModule } from "@angular/router/testing"
import { Observable, of } from "rxjs"
import { CoursesService } from "src/app/services/courses/courses.service"
import { UserService } from "src/app/services/user/user.service"
import { UserEditComponent } from "./user-edit.component"

describe('UserEditComponent', () => {
  let component: UserEditComponent
  let fixture: ComponentFixture<UserEditComponent>
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UserEditComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: UserService, useClass: fakeUserService },
        { provide: CoursesService, useClass: fakeCoursesService }
      ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  })

  it('should create the component', () => {
    expect(UserEditComponent).toBeTruthy();
  })


  it('Form should render', () => {
    const compiled = fixture.debugElement.nativeElement;
    const courseInput = compiled.querySelector('select#inputGroupSelect01')
    const trainingInput = compiled.querySelector('select#inputGroupSelect02')
    const timeInput = compiled.querySelector('input#inputGroupSelect03')
    const submitButton = compiled.querySelector('button.btn');

    expect(courseInput).toBeTruthy();
    expect(trainingInput).toBeTruthy();
    expect(timeInput).toBeTruthy();
    expect(submitButton).toBeTruthy();

  })

  it('Form should be false by default', () => {
    const form = component.timeForm;
    expect(form.valid).toBeFalsy();
  })

  it('Form should be valid after input changes', () => {
    const form = component.timeForm;

    const course = form.controls.course_id;
    course.setValue('somerandomstring');

    const training = form.controls.trainingtype_id;
    training.setValue('someotherrandomstring');

    const time = form.controls.timespent
    time.setValue('1')

    expect(form.valid).toBeTruthy()
  })

})

/**
 * fake stuff for testingg.
 * 
 * 
 */
@Component({ template: '' })
class FakeComponent { }

// fake service
class fakeCoursesService {
  getCourses(): Observable<any> {
    return of([])
  }
  getTrainingTypes(): Observable<any> {
    return of([])
  }
}

// user service
class fakeUserService {

  getUserById(): Observable<any> {
    return of([])
  }
}
