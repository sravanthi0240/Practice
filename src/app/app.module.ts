import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { JsonChartComponent } from './json-chart/json-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { ModelTableComponent } from './model-table/model-table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { PopupComponent } from './popup/popup.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BaseComponent } from './base/base.component';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { TestComponent } from './test/test.component';
import { DshbrdComponent } from './dshbrd/dshbrd.component';
import { RegistrationComponent } from './registration/registration.component';

import { ReportsComponent } from './reports/reports.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './notification/notification.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { KeyboardEventComponent } from './keyboard-event/keyboard-event.component';
import { HostListenersComponent } from './host-listeners/host-listeners.component';
import { EvenNumbersComponent } from './even-numbers/even-numbers.component';
import { CombinedArrayComponent } from './combined-array/combined-array.component';
import { AgeArrayComponent } from './age-array/age-array.component';
import { MyCustomDirective } from './my-custom.directive';
import { ChildRegistrationComponent } from './child-registration/child-registration.component';




@NgModule({
  declarations: [
    AppComponent,
   
    PieChartComponent,
    DonutChartComponent,
    ScatterChartComponent,
    LineChartComponent,
    JsonChartComponent,

    LoginComponent,
    DashboardComponent,
    FormComponent,
    DynamicFormComponent,
    ModelFormComponent,
    ModelTableComponent,
    PopupComponent,
    CheckboxComponent,
    ParentComponent,
    ChildComponent,
    BaseComponent,
    TableComponent,
    TestComponent,
    DshbrdComponent,
    RegistrationComponent,
  
    ReportsComponent,
    ContactComponent,
    NotificationComponent,
    LazyLoadComponent,
    KeyboardEventComponent,
    HostListenersComponent,
    EvenNumbersComponent,
    CombinedArrayComponent,
    AgeArrayComponent,
    MyCustomDirective,
    ChildRegistrationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'legacy' },
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
