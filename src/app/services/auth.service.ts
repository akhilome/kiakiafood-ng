import { Injectable } from '@angular/core';
import { UserSignupDetails } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl = `${environment.api}/auth/signup`;

  constructor(private http: HttpClient) {}

  signup(userDetails: UserSignupDetails): Observable<any> {
    return this.http
      .post(this.signupUrl, userDetails)
      .pipe(tap(res => this.saveToken(res.user.auth_token)));
  }

  private saveToken(token: string): void {
    window.localStorage.setItem('kiakiafoodToken', token);
  }
}
