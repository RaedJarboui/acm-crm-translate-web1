import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from "../app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';





@NgModule({

  imports: [
     CommonModule,
     FormsModule,
     NgxPaginationModule ,
    MatAutocompleteModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
   



   ],
   declarations: [
   ],
   exports: [
     CommonModule,
     FormsModule,
     NgxPaginationModule , 
    MatAutocompleteModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule

    
   ],bootstrap: [AppComponent]
 })
 export class SharedModule {
  
 }