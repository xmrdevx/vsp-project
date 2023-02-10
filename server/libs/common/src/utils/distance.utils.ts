const KILOMETERS_IN_MILE: number = 1.60934;
const MILES_IN_KILOMETER: number = 0.621371;
const METERS_IN_KILOMETER: number  = 1000;

export const kilometersToMiles = (distance: number): number => {
  return distance * MILES_IN_KILOMETER;
}

export const milesToKilometers = (distance: number): number => {
  return distance * KILOMETERS_IN_MILE;
}

export const kilometersToMeters = (distance: number): number => {
  return distance * METERS_IN_KILOMETER;
}

export const milesToMeters = (distance: number): number => {
  return milesToKilometers(distance) * METERS_IN_KILOMETER;
}
