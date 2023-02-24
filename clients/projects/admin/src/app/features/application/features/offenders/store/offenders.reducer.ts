import { createFeature, createReducer, on } from '@ngrx/store';

import { defaultBasicQuerySearchWithDeletedFilter } from '@vsp/admin/core/constants';
import { Offender, Page, ResponseMessage } from '@vsp/core';
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
}


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


const handlGetOffenderByIdRequestSuccess = (state: OffendersState, { offender }: any) => ({
  ...state,
  selectedOffender: offender
} as OffendersState);


export const offendersFeature = createFeature({
  name: 'offenders',
  reducer: createReducer(
    initialOffendersState,
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
      handlGetOffenderByIdRequestSuccess
    )
  )
});
