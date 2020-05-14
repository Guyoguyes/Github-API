import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {User} from "../model/user";
import {error} from "util";

@Injectable({
  providedIn: 'root'


})
export class GithubService {

  user: User

  constructor(public http: HttpClient) { }

  getUser(search: string){
    let promise = new Promise((resolve, reject) =>{
      this.http.get<User>(`${environment.urlHeader}` + search + `${environment.API_KEY}`).toPromise().then(
        (result) =>{
          this.user =  result
          resolve()
        },
        (error) =>{
          reject()
        }
      )
    })
    return promise
  }
}
