import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JsonChartComponent } from './json-chart/json-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { DshbrdComponent } from './dshbrd/dshbrd.component';

import { RegistrationComponent } from './registration/registration.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  // {path: '', redirectTo: 'shwp/login', pathMatch:'full'},
  // {path: 'shwp/login', component:LoginComponent},
  // {path:'', component: DashboardComponent},
  // {path:'dashboard', component:DashboardComponent,
  //   children:[
      
  //     {path:'test', component: TestComponent},
  //     {path:'dshbrd', component: DshbrdComponent},
  //     {path:'iec', component: IecMatrialUploadComponent},
  //     {path:'reg', component: RegistrationComponent},
  //     {path:'rep', component: ReportsComponent},
      

  //   ]
  // },
  

  // {path: '', component: JsonChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
