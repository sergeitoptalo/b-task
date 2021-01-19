import { State } from '../../models/state.model';

export const selectLoadingState = (state: State): boolean => state.isLoading;
