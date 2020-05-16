import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Repo} from "../model/repo";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  repo: Repo
  api_key = '?access_token='+environment.API_KEY
  repo_url = '/repos?'


  constructor(private http: HttpClient) { }

  getRepo(search: string){
    let promise = new Promise<Repo>((resolve, reject) =>{
      this.http.get<Repo>(environment.urlHeader + search + this.repo_url + this.api_key).toPromise().then(
        (result) => {
          this.repo = result
          console.log(result)
          resolve()
        },
      (error) => {
          reject()
      }
      )
    })
    return promise
  }
}
