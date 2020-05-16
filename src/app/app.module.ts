import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { NgProgressModule} from "@ngx-progressbar/core";
import { NgProgressHttpClientModule} from "@ngx-progressbar/http-client";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { GithubProfileComponent } from './component/github-profile/github-profile.component';
import { RepoComponent } from './component/repo/repo.component';
import { DateCountPipe } from './pipes/date-count.pipe';
import { DirectiveDirective } from './directive/directive.directive';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubProfileComponent,
    RepoComponent,
    DateCountPipe,
    DirectiveDirective,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
