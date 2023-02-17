import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModule } from './post/post.module';
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
@NgModule({
  declarations: [
    AppComponent,
    AddarrayComponent,
    RawvalueComponent,
    AboutusComponent,
    Page404Component,
    PagevalueComponent,
    LoginpageComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PostModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
