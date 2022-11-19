import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: 'tasks' , component: AddTaskComponent, canActivate: [OnlyLoggedInUsersGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
