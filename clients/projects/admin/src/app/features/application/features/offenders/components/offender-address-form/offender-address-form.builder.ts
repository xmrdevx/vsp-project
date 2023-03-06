import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

export const buildOffenderAddressFormGroup: Function = (formBuilder: UntypedFormBuilder): UntypedFormGroup => {
  return formBuilder.group({
    street: [null],
    street2: [null],
    city: [null],
    state: [null],
    zip: [null],
    country: [null],
    latitude: [null],
    longitude: [null],
    fullAddressString: [null]
  });
}
