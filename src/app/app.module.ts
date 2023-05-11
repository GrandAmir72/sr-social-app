import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AddPostFormComponent } from './components/add-post-form/add-post-form.component';
import { AllPostListComponent } from './components/all-post-list/all-post-list.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, ProfileCardComponent, AddPostFormComponent, AllPostListComponent, SearchComponent, FilterComponent, AllUsersComponent, CalendarComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
