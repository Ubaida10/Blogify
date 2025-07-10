import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../models/user';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.backendUrl}/api/users`;
  http = inject(HttpClient);

  private loggedIn = false;

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string, user: any }>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        this.loggedIn = true;
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        return true;
      }),
      catchError(() => {
        this.loggedIn = false;
        return [false];
      })
    );
  }

  signup(newUser: User): Observable<boolean> {
    return this.http.post(`${this.apiUrl}`, newUser).pipe(
      map(() => true),
      catchError((error) => throwError(() => error))
    );
  }

  updateUser(updatedUser: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${updatedUser.id}`, updatedUser);
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return this.loggedIn || !!localStorage.getItem('user');
  }
}
