import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Offender, Page, PageRequest, ResponseMessage } from '@vsp/core';
import { TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

export const OffendersActions = createActionGroup({
  source: 'Offenders',
  events: {
    'Search Offenders Request': props<{ filter: BasicQuerySearchFilter, pageRequest: PageRequest }>(),
    'Search Offenders Request Success': props<{ page: Page<Offender> }>(),
    'Search Offenders Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Offenders Search Filter': props<{ filter: BasicQuerySearchFilter }>(),
    'Create Offender Request': props<{ offender: Offender }>(),
    'Create Offender Request Success': props<{ message: ResponseMessage<void>}>(),
    'Create Offender Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Create Offender Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Update Offender Request': props<{ offenderId: string, offender: Offender }>(),
    'Update Offender Request Success': props<{ message: ResponseMessage<void>}>(),
    'Update Offender Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Update Offender Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Get Offender By Id Request': props<{ offenderId: string }>(),
    'Get Offender By Id Request Success': props<{ offender: Offender }>(),
    'Get Offender By Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Selected Offender': props<{ offender: Offender | null }>(),
    'Delete Offender Request': props<{ offenderId: string }>(),
    'Delete Offender Request Success': props<{ offender: Offender }>(),
    'Delete Offender Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Delete Offender Response Message': props<{ message: ResponseMessage<void>}>(),
    'Set Offenders Table Definition': props<{ tableDefinition: TableDefinition | null }>(),
    'Reset Offenders Table Definition': emptyProps(),
    'Restore Offender Request': props<{ offenderId: string }>(),
    'Restore Offender Request Success': props<{ offender: Offender }>(),
    'Restore Offender Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Restore Offender Response Message': props<{ message: ResponseMessage<void>}>(),
  }
});
