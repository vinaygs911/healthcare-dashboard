import { createReducer, on } from '@ngrx/store';
import * as PatientActions from './patient.actions';

export interface PatientState {
  patients: any[];
  error: string | null;
}

const initialState: PatientState = {
  patients: [],
  error: null
};

export const patientReducer = createReducer(
  initialState,
  on(PatientActions.loadPatientsSuccess, (state, { patients }) => ({ ...state, patients, error: null })),
  on(PatientActions.loadPatientsFailure, (state, { error }) => ({ ...state, error }))
);
