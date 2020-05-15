import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {User} from "../../model/user";
import {error} from "util";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search: string;
  user: User

  @Output() searchuser = new EventEmitter<User>()

  constructor(public githubService: GithubService) { }

  searchUser(completeSearch){
    this.searchuser.emit(completeSearch)
  }

  ngOnInit() {

  }

}
