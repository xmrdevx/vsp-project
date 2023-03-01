import { createFeature, createReducer, on } from '@ngrx/store';

import { defaultBasicQuerySearchWithDeletedFilter } from '@vsp/admin/core/constants';
import { Offender, OffenderComment, Page, ResponseMessage } from '@vsp/core';
import { TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

import { getDefaultOffendersOverviewTableDefinition } from '../pages/offenders-overview/offenders-overview-table-definition.defaults';
import { OffendersActions } from './offenders.actions';

export interface OffendersState {
  createOffenderResponseMessage: ResponseMessage<void> | null,
  updateOffenderResponseMessage: ResponseMessage<void> | null,
  deleteOffenderResponseMessage: ResponseMessage<void> | null,
  restoreOffenderResponseMessage: ResponseMessage<void> | null
  offendersPage: Page<Offender> | null,
  offendersSearchFilter: BasicQuerySearchFilter | null,
  offendersTableDefinition: TableDefinition | null,
  selectedOffender: Offender | null,
  createOffenderCommentResponseMessage: ResponseMessage<OffenderComment | void> | null,
  currentOffenderCommentsPage: Page<OffenderComment> | null,
  loadedOffenderCommentPages: Page<OffenderComment>[],
}

export const initialOffendersState: OffendersState = {
  createOffenderResponseMessage: null,
  updateOffenderResponseMessage: null,
  deleteOffenderResponseMessage: null,
  restoreOffenderResponseMessage: null,
  offendersPage: null,
  offendersSearchFilter: defaultBasicQuerySearchWithDeletedFilter,
  offendersTableDefinition: getDefaultOffendersOverviewTableDefinition(),
  selectedOffender: null,
  createOffenderCommentResponseMessage: null,
  currentOffenderCommentsPage: null,
  loadedOffenderCommentPages: [],
}


const handleCreateOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  handleCreateOffenderResponseMessage: message
});


const handleUpdateOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  handleUpdateOffenderResponseMessage: message
});


const handleDeleteOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  handleDeleteOffenderResponseMessage: message
});


const handleRestoreOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  handleRestoreOffenderResponseMessage: message
});


const handleCreateOffenderCommentResponseMessage = (state: OffendersState, { message }: any) => {
  const firstOffenderCommentPage: Page<OffenderComment> = state.loadedOffenderCommentPages[0] || undefined;

  const newLoadedOffenderCommentPages: Page<OffenderComment>[] = firstOffenderCommentPage 
    ? [
      { ...firstOffenderCommentPage, elements: [message.payload, ...firstOffenderCommentPage.elements]}, 
      ...state.loadedOffenderCommentPages.slice(1)]
    : []
  return {
    ...state,
    handleCreateOffenderCommentResponseMessage: message,
    loadedOffenderCommentPages: newLoadedOffenderCommentPages
  } as OffendersState
};


const handleSearchOffendersRequestSuccess = (state: OffendersState, { page }: any) => ({
  ...state,
  offendersPage: page
} as OffendersState);


const handleSetOffendersSearchFilter = (state: OffendersState, { filter }: any) => ({
  ...state,
  offendersSearchFilter: filter
} as OffendersState);


const handleSetOffendersTableDefinition = (state: OffendersState, { tableDefinition }: any) => ({
  ...state,
  offendersTableDefinition: tableDefinition
} as OffendersState);


const handleResetOffendersTableDefinition = (state: OffendersState) => ({
  ...state,
  offendersTableDefinition: getDefaultOffendersOverviewTableDefinition()
} as OffendersState);


const handleGetOffenderByIdRequestSuccess = (state: OffendersState, { offender }: any) => ({
  ...state,
  selectedOffender: offender
} as OffendersState);


const handleSearchOffenderCommentsRequestSuccess = (state: OffendersState, { page }: any) => ({
  ...state,
  currentOffenderCommentsPage: page,
  loadedOffenderCommentPages: [...state.loadedOffenderCommentPages, page]
} as OffendersState);


const handleResetSearchOffenderComments = (state: OffendersState, { page }: any) => ({
  ...state,
  currentOffenderCommentsPage: null,
  loadedOffenderCommentPages: []
} as OffendersState);


export const offendersFeature = createFeature({
  name: 'offenders',
  reducer: createReducer(
    initialOffendersState,
    on(
      OffendersActions.createOffenderRequestSuccess,
      OffendersActions.createOffenderRequestFailure,
      handleCreateOffenderResponseMessage
    ),
    on(
      OffendersActions.updateOffenderRequestSuccess,
      OffendersActions.updateOffenderRequestFailure,
      handleUpdateOffenderResponseMessage
    ),
    on(
      OffendersActions.deleteOffenderRequestSuccess,
      OffendersActions.deleteOffenderRequestFailure,
      handleDeleteOffenderResponseMessage
    ),
    on(
      OffendersActions.restoreOffenderRequestSuccess,
      OffendersActions.restoreOffenderRequestFailure,
      handleRestoreOffenderResponseMessage
    ),
    on(
      OffendersActions.createOffenderCommentRequestSuccess,
      OffendersActions.createOffenderCommentRequestFailure,
      handleCreateOffenderCommentResponseMessage
    ),
    on(
      OffendersActions.searchOffendersRequestSuccess,
      handleSearchOffendersRequestSuccess
    ),
    on(
      OffendersActions.setOffendersSearchFilter,
      handleSetOffendersSearchFilter
    ),
    on(
      OffendersActions.setOffendersTableDefinition,
      handleSetOffendersTableDefinition
    ),
    on(
      OffendersActions.resetOffendersTableDefinition,
      handleResetOffendersTableDefinition
    ),
    on(
      OffendersActions.getOffenderByIdRequestSuccess,
      handleGetOffenderByIdRequestSuccess
    ),
    on(
      OffendersActions.searchOffenderCommentsRequestSuccess,
      handleSearchOffenderCommentsRequestSuccess
    ),
    on(
      OffendersActions.resetSearchOffenderComments,
      handleResetSearchOffenderComments
    )
  )
});
