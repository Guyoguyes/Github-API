import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {GithubService} from "../../services/github.service";
import {Repo} from "../../model/repo";
import {RepoService} from "../../services/repo.service";
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  users: User;
  repos: Repo;
  page = 1;

  constructor(private githubService: GithubService,
              private repoService: RepoService) { }


  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

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
