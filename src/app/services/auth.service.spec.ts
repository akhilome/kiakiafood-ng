import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { UserSignupDetails } from '../shared/models/user.model';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hit the signup endpoint', done => {
    const user: UserSignupDetails = {
      name: 'mike',
      email: 'mike@mail.com',
      password: 'securePassword',
      confirmPassword: 'securePassword'
    };

    service.signup(user).subscribe(res => {
      expect(res.user.auth_token).toEqual('ss');
      done();
    });

    httpMock.expectOne(`${environment.api}/auth/signup`).flush({
      user: {
        auth_token: 'ss'
      },
      status: 'success'
    });
  });
});
