import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Repo} from "../../model/repo";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() repo: Repo





  constructor() { }



  ngOnInit() {
  }

}
