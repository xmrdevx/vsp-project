import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Link, LinkType, Visibility } from '@vsp/core';

export const defaultLinkFormValue: Link = {
  type: LinkType.DOCUMENTATION,
  name: '',
  url: '',
  visibility: Visibility.PRIVATE
} as Link;

export const buildLinkForm: Function = (formBuilder: UntypedFormBuilder): UntypedFormGroup => {
  return formBuilder.group({
    type: [defaultLinkFormValue.type, [Validators.required]],
    name: ['', [Validators.required]],
    url: ['', [Validators.required]],
    visibility: [defaultLinkFormValue.visibility, [Validators.required]]
  });
};
