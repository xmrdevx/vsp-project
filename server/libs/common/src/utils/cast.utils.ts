interface ToNumberOptions {
  default?: number;
  min?: number;
  max?: number;
}

export function toLowerCase(value: string): string {
  return value.toLowerCase();
}

export function trim(value: string): string {
  return value.trim();
}

export function toDate(value: string): Date {
  return new Date(value);
}

export function toBoolean(value: string): boolean {
  value = value.toLowerCase();

  return value === 'true' || value === '1' ? true : false;
}

export function toOptionalBoolean(value: string): boolean | undefined {
  let newValue: string = value.trim().toLowerCase();
  
  if (newValue.length === 0) return undefined;
  
  value = value.toLowerCase();

  return value === 'true' || value === '1' ? true : false;
}

export function toIntNumber(value: string, opts: ToNumberOptions = {}): number {
  let newValue: number = Number.parseInt(value || String(opts.default), 10);

  if (!newValue || Number.isNaN(newValue)) {
    newValue = opts.default || 0;
  }

  if (newValue && opts.min) {
    if (newValue < opts.min) {
      newValue = opts.min;
    }

    if (opts?.max && newValue > opts.max) {
      newValue = opts.max;
    }
  }

  return newValue;
}

export function toFloatNumber(value: string, opts: ToNumberOptions = {}): number {
  let newValue: number = Number.parseFloat(value || String(opts.default));

  if (!newValue || Number.isNaN(newValue)) {
    newValue = opts.default || 0;
  }

  if (newValue && opts.min) {
    if (newValue < opts.min) {
      newValue = opts.min;
    }

    if (opts?.max && newValue > opts.max) {
      newValue = opts.max;
    }
  }

  return newValue;
}
