import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PeopleComponent,
    WelcomePageComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //FontAwesomeModule,
    //ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomePageComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'people', component: PeopleComponent },
      //{
      //  path: 'users/:id',
      //  canActivate: [UserDetailGuard],
      //  component: UserDeailsComponent
      //},
      //{ path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
