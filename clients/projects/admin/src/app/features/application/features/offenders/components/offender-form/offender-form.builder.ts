import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Offender } from '@vsp/core';

export const defaultOffenderFormValue: any = {
  id: null,
  avatarUrl: '',
  firstName: '',
  lastName: '',
  summary: '',
};

export const buildOffenderForm = (formBuilder: UntypedFormBuilder) => {
  return formBuilder.group({
    id: [defaultOffenderFormValue.id],
    avatarUrl: [defaultOffenderFormValue.avatarUrl],
    firstName: [defaultOffenderFormValue.firstName, [Validators.required]],
    lastName: [defaultOffenderFormValue.lastName, [Validators.required]],
    summary: [defaultOffenderFormValue.summary]
  });
};
