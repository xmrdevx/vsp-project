import { UntypedFormBuilder, Validators } from '@angular/forms';

export const buildOffenderForm = (formBuilder: UntypedFormBuilder) => {
  return formBuilder.group({
    avatarUrl: [''],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    summary: ['']
  });
};