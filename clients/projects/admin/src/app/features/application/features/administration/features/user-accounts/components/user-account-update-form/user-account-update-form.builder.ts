import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Claim } from '@vsp/core';

export const buildUserAccountUpdateForm = (
    formBuilder: UntypedFormBuilder,
    claims: Claim[]
  ) => formBuilder.group({
    user: formBuilder.group({
      id: [null, [Validators.required]],
      username: [{ value: null, disabled: true }],
      email: [{ value: null, disabled: true }]
    }),
    profile: formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    }),
    claims: formBuilder.array([])
  });
