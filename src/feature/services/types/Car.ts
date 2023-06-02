export type Fuel = 'GAS' | 'PETROL' | 'DIESEL' | 'ELECTRIC' | 'HYDROGEN';

export const FUEL_TYPES: ReadonlyArray<Fuel> = ['GAS', 'DIESEL', 'ELECTRIC', 'HYDROGEN', 'PETROL'];

export type GearBox = 'MANUAL' | 'AUTOMATIC';

export const GEAR_BOX_TYPES: ReadonlyArray<GearBox> = ['AUTOMATIC', 'MANUAL'];

export interface Car {
  id: number;
  name?: string;
  /**
   * url of image
   */
  img: string;
  parameters: CarParameters;
}

export interface ParametersWeights {
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

export interface CarId {
  id: number;
}
