import { Car } from '../../../feature/services/types/CarParameters';
import CAR_EXAMPLE_IMG from '../../../assets/car-example.jpg';

export const mocked_cars: Car[] = [
  {
    name: 'Toyota Corolla',
    img: CAR_EXAMPLE_IMG,
    yearOfManufacture: 2020,
    mileage: 20000,
    price: 15000,
    horsePower: 140,
    typeOfFuel: 'PETROL',
    gearBox: 'AUTOMATIC'
  },
  {
    name: 'Tesla Model S',
    yearOfManufacture: 2021,
    mileage: 5000,
    price: 80000,
    horsePower: 670,
    typeOfFuel: 'ELECTRIC',
    gearBox: 'AUTOMATIC'
  }
];
