import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'assignment', component: AssignmentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
