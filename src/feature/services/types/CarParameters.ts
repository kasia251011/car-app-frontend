export type Fuel = 'GAS' | 'PETROL' | 'DIESEL' | 'ELECTRIC' | 'HYDROGEN';

export const FUEL_TYPES: ReadonlyArray<Fuel> = ['GAS', 'DIESEL', 'ELECTRIC', 'HYDROGEN', 'PETROL'];

export type GearBox = 'MANUAL' | 'AUTOMATIC';

export const GEAR_BOX_TYPES: ReadonlyArray<GearBox> = ['AUTOMATIC', 'MANUAL'];

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
}

export interface CarParameters {
  id?: number;
  yearOfManufacture: number;
  mileage: number;
  price: number;
  horsePower: number;
  typeOfFuel: Fuel;
  gearBox: GearBox;
}
