import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      //{ path: 'welcome', component: WelcomePageComponent },
      { path: 'registration', component: RegistrationComponent },
      //{ path: 'users', component: UsersListComponent },
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
