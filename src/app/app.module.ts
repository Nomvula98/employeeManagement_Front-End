import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { RouterModule, ROUTES } from '@angular/router';
import appRoutes, { AppRoutingModule, routingComponents } from './app.routing.module';
import { JobDescComponent } from './job-desc/job-desc.component';

@NgModule({
  declarations: [
    //AppComponent,
    //EmpDetailsComponent,
    routingComponents,
    JobDescComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
     //{ path: '', component: Component},
      //{path: 'emp-details/:id', component: EmpDetailsComponent}
    //])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

