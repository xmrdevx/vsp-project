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


export const selectCreateOffenderAddressResponseMessage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.createOffenderAddressResponseMessage
);


export const selectCreateOffenderLinkResponseMessage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.createOffenderLinkResponseMessage
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


export const selectCreateOffenderCommentResponseMessage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.createOffenderCommentResponseMessage
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


export const selectSelectedOffenderAddresses = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.selectedOffenderAddresses
);


export const selectSelectedOffenderLinks = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.selectedOffenderLinks
);


export const selectCurrentOffenderCommentsPage = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.currentOffenderCommentsPage
);


export const selectLoadedOffenderCommentPages = createSelector(
  selectOffendersState,
  (state: OffendersState) => state.loadedOffenderCommentPages
);


export const OffendersSelectors = {
  selectCreateOffenderResponseMessage,
  selectCreateOffenderAddressResponseMessage,
  selectCreateOffenderCommentResponseMessage,
  selectCreateOffenderLinkResponseMessage,
  selectDeleteOffenderResponseMessage,
  selectOffendersPage,
  selectOffendersSearchFilter,
  selectOffendersState,
  selectOffendersTableDefinition,
  selectSelectedOffender,
  selectUpdateOffenderResponseMessage,
  selectCurrentOffenderCommentsPage,
  selectLoadedOffenderCommentPages,
  selectSelectedOffenderAddresses,
  selectSelectedOffenderLinks
};
