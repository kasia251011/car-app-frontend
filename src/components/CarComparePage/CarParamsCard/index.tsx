import { Box, InputBase, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CAR_IMG from '../../../assets/car_for_card.png';
import './styles.scss';
import { useFormContext } from 'react-hook-form';
import {
  FUEL_TYPES,
  GEAR_BOX_TYPES,
  WHEEL_DRIVE_TYPES
} from '../../../feature/services/types/CarParameters';

interface CarParamsCardProps {
  index: number;
  carName: string;
}

function formatOption(option: string) {
  return option.toLowerCase().replace('_', ' ');
}

const CarParamsCard = ({ index, carName }: CarParamsCardProps) => {
  const { register } = useFormContext();

  return (
    <Box className="car-params-card">
      <Box className="form">
        <Typography variant="h2">{carName}</Typography>
        <InputLabel className="label">Year of manufacture</InputLabel>
        <InputBase {...register(`carsParameters[${index}].yearOfManufacture`)} />
        <InputLabel className="label">Mileage</InputLabel>
        <InputBase {...register(`carsParameters[${index}].mileage`)} />
        <InputLabel className="label">Price</InputLabel>
        <InputBase {...register(`carsParameters[${index}].price`)} />
        <InputLabel className="label">Horsepower</InputLabel>
        <InputBase {...register(`carsParameters[${index}].horsePower`)} />
        <InputLabel className="label">Type of fuel</InputLabel>
        <Select {...register(`carsParameters[${index}].typeOfFuel`)} defaultValue={FUEL_TYPES[0]}>
          {FUEL_TYPES.map((fuel) => (
            <MenuItem key={fuel} value={fuel}>
              {formatOption(fuel)}
            </MenuItem>
          ))}
        </Select>
        <InputLabel className="label">Gear box</InputLabel>
        <Select {...register(`carsParameters[${index}].gearBox`)} defaultValue={GEAR_BOX_TYPES[0]}>
          {GEAR_BOX_TYPES.map((gearBox) => (
            <MenuItem key={gearBox} value={gearBox}>
              {formatOption(gearBox)}
            </MenuItem>
          ))}
        </Select>
        <InputLabel className="label">Wheel drive</InputLabel>
        <Select
          {...register(`carsParameters[${index}].wheelDrive`)}
          defaultValue={WHEEL_DRIVE_TYPES[0]}>
          {WHEEL_DRIVE_TYPES.map((wheelDrive) => (
            <MenuItem key={wheelDrive} value={wheelDrive}>
              {formatOption(wheelDrive)}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box className="image-container">
        <img src={CAR_IMG} />
      </Box>
    </Box>
  );
};

export default CarParamsCard;
