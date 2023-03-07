import { createFeature, createReducer, on } from '@ngrx/store';

import { defaultBasicQuerySearchWithDeletedFilter } from '@vsp/admin/core/constants';
import { Address, Link, Offender, OffenderComment, Page, ResponseMessage } from '@vsp/core';
import { TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

import { getDefaultOffendersOverviewTableDefinition } from '../pages/offenders-overview/offenders-overview-table-definition.defaults';
import { OffendersActions } from './offenders.actions';

export interface OffendersState {
  createOffenderResponseMessage: ResponseMessage<Offender | void> | null,
  createOffenderAddressResponseMessage: ResponseMessage<Address | void> | null,
  createOffenderLinkResponseMessage: ResponseMessage<Link | void> | null,
  updateOffenderResponseMessage: ResponseMessage<Offender | void> | null,
  deleteOffenderResponseMessage: ResponseMessage<Offender | void> | null,
  restoreOffenderResponseMessage: ResponseMessage<Offender | void> | null
  offendersPage: Page<Offender> | null,
  offendersSearchFilter: BasicQuerySearchFilter | null,
  offendersTableDefinition: TableDefinition | null,
  selectedOffender: Offender | null,
  selectedOffenderAddresses: Address[] | null,
  selectedOffenderLinks: Link[] | null,
  createOffenderCommentResponseMessage: ResponseMessage<OffenderComment | void> | null,
  currentOffenderCommentsPage: Page<OffenderComment> | null,
  loadedOffenderCommentPages: Page<OffenderComment>[],
}

export const initialOffendersState: OffendersState = {
  createOffenderResponseMessage: null,
  createOffenderAddressResponseMessage: null,
  createOffenderLinkResponseMessage: null,
  updateOffenderResponseMessage: null,
  deleteOffenderResponseMessage: null,
  restoreOffenderResponseMessage: null,
  offendersPage: null,
  offendersSearchFilter: defaultBasicQuerySearchWithDeletedFilter,
  offendersTableDefinition: getDefaultOffendersOverviewTableDefinition(),
  selectedOffender: null,
  selectedOffenderAddresses: null,
  selectedOffenderLinks: null,
  createOffenderCommentResponseMessage: null,
  currentOffenderCommentsPage: null,
  loadedOffenderCommentPages: [],
}


const handleCreateOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  createOffenderResponseMessage: message
});


const handleUpdateOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  updateOffenderResponseMessage: message,
  selectedOffender: null,
  offendersPage: !state?.offendersPage ? null : {
    ...state.offendersPage,
    elements: state.offendersPage?.elements
      .map(offender => offender.id === message.payload.id ? message.payload : offender)
  } as Page<Offender>
} as OffendersState);


const handleDeleteOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  deleteOffenderResponseMessage: message
});


const handleRestoreOffenderResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  restoreOffenderResponseMessage: message
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
    createOffenderCommentResponseMessage: message,
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


const handleGetOffenderAddressesRequestSuccess = (state: OffendersState, { addresses }: any) => ({
  ...state,
  selectedOffenderAddresses: addresses
} as OffendersState);


const handleGetOffenderLinksRequestSuccess = (state: OffendersState, { links }: any) => ({
  ...state,
  selectedOffenderLinks: links
} as OffendersState);


const handleCreateOfffenderAddressRequestSuccess = (state: OffendersState, { message }: any) => ({
  ...state,
  createOffenderAddressResponseMessage: message,
  selectedOffenderAddresses: state.selectedOffenderAddresses?.length 
    ? [message.payload, ...state.selectedOffenderAddresses]
    : [message.payload]
} as OffendersState);


const handleCreateOffenderAddressResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  createOffenderAddressResponseMessage: message
} as OffendersState);


const handleCreateOfffenderLinkRequestSuccess = (state: OffendersState, { message }: any) => ({
  ...state,
  createOffenderLinkResponseMessage: message,
  selectedOffenderLinks: state.selectedOffenderLinks?.length 
    ? [message.payload, ...state.selectedOffenderLinks]
    : [message.payload]
} as OffendersState);


const handleCreateOffenderLinkResponseMessage = (state: OffendersState, { message }: any) => ({
  ...state,
  createOffenderLinkResponseMessage: message
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
    ),
    on(
      OffendersActions.getOffenderAddressesRequestSuccess,
      handleGetOffenderAddressesRequestSuccess
    ),
    on(
      OffendersActions.getOffenderLinksRequestSuccess,
      handleGetOffenderLinksRequestSuccess
    ),
    on(
      OffendersActions.createOffenderAddressRequestSuccess,
      handleCreateOfffenderAddressRequestSuccess
    ),
    on(
      OffendersActions.createOffenderAddressRequestFailure,
      OffendersActions.setCreateOffenderAddressResponseMessage,
      handleCreateOffenderAddressResponseMessage
    ),
    on(
      OffendersActions.createOffenderLinkRequestSuccess,
      handleCreateOfffenderLinkRequestSuccess
    ),
    on(
      OffendersActions.createOffenderLinkRequestFailure,
      OffendersActions.setCreateOffenderLinkResponseMessage,
      handleCreateOffenderLinkResponseMessage
    ),
  )
});
