import { State } from '../../models/state.model';

export const selectErrorState = (state: State): boolean => state.hasError;
