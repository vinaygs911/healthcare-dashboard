import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PatientActions from './patient.actions';
import { PatientService } from '../services/patient.service';

@Injectable()
export class PatientEffects {
  loadPatients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.loadPatients),
      mergeMap(() =>
        this.patientService.getPatients().pipe(
          map(patients => PatientActions.loadPatientsSuccess({ patients })),
          catchError(error => of(PatientActions.loadPatientsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private patientService: PatientService) {}
}
