import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {GithubService} from "../../services/github.service";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  user: User;

  constructor(private githubService: GithubService) { }

  searchUser(search){
    this.githubService.getUser(search).then(
      (success) =>{
        console.log(success)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.githubService.getUser('Guyoguyes')
  }

}
