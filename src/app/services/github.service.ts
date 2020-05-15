import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {User} from "../model/user";
import {error} from "util";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'


})
export class GithubService {

  user: User
  apiToken = '?access_token='+environment.API_KEY

  constructor(public http: HttpClient) { }

  getUser(search: string){
    let promise = new Promise<User>((resolve, reject) =>{
      this.http.get<User>(environment.urlHeader + search + this.apiToken).toPromise().then(
        (result) =>{
          this.user =  result
          console.log(result)
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
