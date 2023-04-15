import { Box, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CAR_IMG from '../../../assets/car_for_card.png';
import './styles.scss';
import { useFormContext } from 'react-hook-form';
import { FUEL_TYPES, GEAR_BOX_TYPES } from '../../../feature/services/types/CarParameters';
import YearInput from './YearInput';
import MileageInput from './MileageInput';
import PriceInput from './PriceInput';
import HPInput from './HPInput';
import { useAppSelector } from '../../../feature/hooks';

interface CarParamsCardProps {
  index: number;
  carName: string;
}

function formatOption(option: string) {
  return option.toLowerCase().replace('_', ' ');
}

const CarParamsCard = ({ index, carName }: CarParamsCardProps) => {
  const { register } = useFormContext();
  const bestCarId = useAppSelector((state) => state.currentSession.bestCarId);

  return (
    <Box className={`car-params-card ${bestCarId === index && 'active'}`}>
      <Box className="form">
        <Typography variant="h2">{carName}</Typography>
        <YearInput index={index} />
        <MileageInput index={index} />
        <PriceInput index={index} />
        <HPInput index={index} />
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
      </Box>
      <Box className="image-container">
        <img src={CAR_IMG} />
      </Box>
    </Box>
  );
};

export default CarParamsCard;
