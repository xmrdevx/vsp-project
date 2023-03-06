import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Address, Link, Offender, OffenderComment, Page, PageRequest, ResponseMessage } from '@vsp/core';
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
    'Create Offender Request Success': props<{ message: ResponseMessage<Offender>}>(),
    'Create Offender Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Create Offender Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Update Offender Request': props<{ offenderId: string, offender: Offender }>(),
    'Update Offender Request Success': props<{ message: ResponseMessage<Offender>}>(),
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
    
    // Offender Comments
    'Create Offender Comment Request': props<{ offenderId: string, comment: OffenderComment }>(),
    'Create Offender Comment Request Success': props<{ message: ResponseMessage<OffenderComment> }>(),
    'Create Offender Comment Request Failure': props<{ message: ResponseMessage<void> }>(),
    'Set Create Offender Comment Request Response Message': props<{ message: ResponseMessage<void> }>(),
    'Search Offender Comments Request': props<{ offenderId: string, filter: BasicQuerySearchFilter, pageRequest: PageRequest }>(),
    'Search Offender Comments Request Success': props<{ page: Page<OffenderComment> }>(),
    'Search Offender Comments Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Reset Search Offender Comments': emptyProps(),

    // Offender Addresses
    'Create Offender Address Request': props<{ offenderId: string, address: Address }>(),
    'Create Offender Address Request Success': props<{ message: ResponseMessage<Address> }>(),
    'Create Offender Address Request Failure': props<{ message: ResponseMessage<void> }>(),
    'Set Create Offender Address Response Message': props<{ message: ResponseMessage<Address | void> | null }>(),
    'Get Offender Addresses Request': props<{ offenderId: string }>(),
    'Get Offender Addresses Request Success': props<{ addresses: Address[] }>(),
    'Get Offender Addresses Request Failure': props<{ message: ResponseMessage<void> }>(),

    // Offender Links
    'Create Offender Link Request': props<{ offenderId: string, link: Link }>(),
    'Create Offender Link Request Success': props<{ message: ResponseMessage<Link> }>(),
    'Create Offender Link Request Failure': props<{ message: ResponseMessage<void> }>(),
    'Set Create Offender Link Response Message': props<{ message: ResponseMessage<Link | void> | null }>(),
    'Get Offender Links Request': props<{ offenderId: string }>(),
    'Get Offender Links Request Success': props<{ links: Link[] }>(),
    'Get Offender Links Request Failure': props<{ message: ResponseMessage<void> }>(),
  }
});
