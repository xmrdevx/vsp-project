import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

export const defaultAddressFormValue: any = {
  street: null,
  street2: null,
  city: null,
  state: null,
  zip: null,
  country: null,
  latitude: null,
  longitude: null,
  fullAddressString: null
};

export const buildOffenderAddressFormGroup: Function = (formBuilder: UntypedFormBuilder): UntypedFormGroup => {
  return formBuilder.group({
    street: [defaultAddressFormValue.street],
    street2: [defaultAddressFormValue.street2],
    city: [defaultAddressFormValue.city],
    state: [defaultAddressFormValue.state],
    zip: [defaultAddressFormValue.zip],
    country: [defaultAddressFormValue.country],
    latitude: [defaultAddressFormValue.latitude],
    longitude: [defaultAddressFormValue.longitude],
    fullAddressString: [defaultAddressFormValue.fullAddressString]
  });
}
