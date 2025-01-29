import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { patientReducer } from './store/patient.reducer';
import { PatientEffects } from './store/patient.effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, PatientListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot({ patient: patientReducer }),
    EffectsModule.forRoot([PatientEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
