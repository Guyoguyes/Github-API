import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {GithubService} from "../../services/github.service";
import {Repo} from "../../model/repo";
import {RepoService} from "../../services/repo.service";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  users: User;
  repos: Repo

  constructor(private githubService: GithubService,
              private repoService: RepoService) { }

  searchUser(search){
    this.githubService.getUser(search).then(
      (success) => {
        this.users = this.githubService.user
      },
      (error) => {
        console.log(error)
      }
    )
    this.repoService.getRepo(search).then(
      (success) =>{
        this.repos = this.repoService.repo

      },
      (error) => {
        console.log(error)
      }
    )
  }


  ngOnInit() {
    this.searchUser('Guyoguyes')
  }

}
