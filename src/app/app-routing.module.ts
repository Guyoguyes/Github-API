import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GithubProfileComponent} from "./component/github-profile/github-profile.component";
import {RepoComponent} from "./component/repo/repo.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";



const routes: Routes = [
  {path: 'profile', component: GithubProfileComponent},
  {path: 'repo', component: RepoComponent},
  {path: '', redirectTo:'profile', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
