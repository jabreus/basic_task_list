import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTaskLessThan1230Component } from './components/add-task-less-than1230/add-task-less-than1230.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';
import { ApplicationStateService } from './services/application-state.service';


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: 'tasks' , component: AddTaskComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: '**', component: PageNotFoundComponent}
];

const less_than_1230_routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'tasks', component: AddTaskLessThan1230Component},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router,
    private applicationStateService: ApplicationStateService){

      if (applicationStateService.getIsLessThan1230()) {
        router.resetConfig(less_than_1230_routes);
      }
    }
 }
