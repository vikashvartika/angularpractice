import { NgModule } from '@angular/core';
// import { AuthGuard } from './auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { AddarrayComponent } from './addarray/addarray.component';
import { RawvalueComponent } from './rawvalue/rawvalue.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Page404Component } from './page404/page404.component';
import { PagevalueComponent } from './pagevalue/pagevalue.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [

  {
    path: 'post',
    loadChildren: () => import('./post/post-routing.module').then(m => m.PostRoutingModule)

  },

  { path: '', component: AboutusComponent },
  { path: 'aarayval', component: AddarrayComponent, canActivate: [AuthGuard] },
  { path: 'rawvalue', component: RawvalueComponent },
  // { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'pagevalue', component: PagevalueComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'pagevalue', component: PagevalueComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
  //{ path: '**', component: Page404Component }
  // { path: '**', redirectTo: '/aboutus' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
