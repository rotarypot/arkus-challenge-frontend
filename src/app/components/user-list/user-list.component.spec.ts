import { Location } from "@angular/common"
import { Component } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms"
import { By } from "@angular/platform-browser"
import { RouterTestingModule } from "@angular/router/testing"
import { Observable, of } from "rxjs"
import { UserService } from "src/app/services/user/user.service"
import { ModalModule, ModalService } from "src/app/_modal"
import { UserListComponent } from "./user-list.component"

describe('UserListComponent', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [
        ReactiveFormsModule,
        ModalModule,
        RouterTestingModule.withRoutes([
          { path: '', component: FakeComponent }
        ]
        )
      ],
      providers: [
        ModalService,
        { provide: UserService, useClass: fakeUserService }
      ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the component', () => {
    expect(UserListComponent).toBeTruthy();
  })


  it('should be at app root page', () => {
    const location = TestBed.inject(Location);
    expect(location.path()).toBe('')
  })

  it('should link to user edit', () => {
    const location = TestBed.inject(Location);
    const link = fixture.debugElement.query(By.css('.edituserlink'))
      .nativeElement.getAttribute('href');
    expect(link).toBe('/user-edit/1')
  })
})

/**
 * fake stuff for testingg.
 * 
 * 
 */
@Component({ template: '' })
class FakeComponent { }

class fakeUserService {
  getPublicData(): Observable<any> {
    return of(

      [
        {
          "_id": "1",
          "username": "Ulises",
          "TrainingTimes": [
            {
              "course": {
                "courseName": "html intro"

              },
              "training_type": {
                "trainingTypeName": "Video"

              },
              "timespent": 1
            }
          ]
        }
      ]
    )
  }
}
