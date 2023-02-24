import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OffendersState, offendersFeature } from './offenders.reducer';

export const selectOffendersState = createFeatureSelector<OffendersState>(
  offendersFeature.name
);

export const selectOffendersPage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.offendersPage
);

export const selectCreateOffenderResponseMessage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.createOffenderResponseMessage
);

export const selectUpdateOffenderResponseMessage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.updateOffenderResponseMessage
);

export const selectDeleteOffenderResponseMessage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.deleteOffenderResponseMessage
);

export const selectRestoreOffenderResponseMessage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.restoreOffenderResponseMessage
);

export const selectOffendersSearchFilter = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.offendersSearchFilter
);

export const selectOffendersTableDefinition = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.offendersTableDefinition
);

export const selectSelectedOffender = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.selectedOffender
);

export const OffendersSelectors = {
  selectCreateOffenderResponseMessage,
  selectDeleteOffenderResponseMessage,
  selectOffendersPage,
  selectOffendersSearchFilter,
  selectOffendersState,
  selectOffendersTableDefinition,
  selectSelectedOffender,
  selectUpdateOffenderResponseMessage,
};
