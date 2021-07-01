import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { EmpDetailsComponent } from "./emp-details/emp-details.component";

const appRoutes: Routes=[
    
    { path: 'home', component: AppComponent },
   {path: 'emp-details', component: EmpDetailsComponent}

];
   
export default appRoutes;
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [AppComponent, EmpDetailsComponent]