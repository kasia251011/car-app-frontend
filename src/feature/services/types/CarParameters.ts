export type Fuel = 'GASOLINE' | 'GASOLINE + LPG' | 'DIESEL' | 'ELECTIC' | 'HYBRID';

export const FUEL_TYPES: ReadonlyArray<Fuel> = [
  'GASOLINE',
  'GASOLINE + LPG',
  'DIESEL',
  'ELECTIC',
  'HYBRID'
];
export type GearBox = 'MANUAL' | 'AUTOMATIC';

export const GEAR_BOX_TYPES: ReadonlyArray<GearBox> = ['AUTOMATIC', 'MANUAL'];

export type WheelDrive = 'FWD' | 'RWD' | 'AWD';

export const WHEEL_DRIVE_TYPES: ReadonlyArray<WheelDrive> = ['AWD', 'FWD', 'RWD'];

export interface CarsInfo {
  id?: number;
  parametersWeight: ParametersWeight;
  carsParameters: CarParameters[];
}

export interface ParametersWeight {
  yearOfManufacture: number;
  mileage: number;
  price: number;
  horsePower: number;
  typeOfFuel: number;
  gearBox: number;
  wheelDrive: number;
}

export interface CarParameters {
  id?: number;
  yearOfManufacture: number;
  mileage: number;
  price: number;
  horsePower: number;
  typeOfFuel: Fuel;
  gearBox: GearBox;
  wheelDrive: WheelDrive;
}
