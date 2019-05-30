import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  const authServiceStub = {
    signup: () => of({})
  };

  const mockRouter = {
    navigate: jest.fn().mockReturnValue(undefined)
  };

  const alertServiceMock = {
    success: jest.fn(),
    error: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: AlertService, useValue: alertServiceMock },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should signup user successfully', () => {
    component.userDetails = {
      name: 'Samuel',
      email: 'j@ja.com',
      password: 'password',
      confirmPassword: 'password'
    };

    component.signUp();
    expect(alertServiceMock.success).toHaveBeenCalledTimes(1);
  });

  // TODO: figure the fuck out why testing is currently giving you a hard time
  // it('should fail to sign up user', () => {
  //   jest.spyOn(authServiceStub, 'signup').mockReturnValue(throwError(''));
  //   component.signUp();
  //   expect(alertServiceMock.error).toHaveBeenCalledTimes(1);
  // });
});
