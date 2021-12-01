import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/rosguide/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  static getLogin: any;
  get(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl + "profile");
  }

  public getLogin(email: string, password: string) {
    return this.http.get(baseUrl + '/login?email=' + email + '&password=' + password);
  }

  create(data) {
    return this.http.post(baseUrl + "profile", data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl + "profile"}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl + "profile"}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl + "profile");
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl + "profile"}?title=${title}`);
  }
}
