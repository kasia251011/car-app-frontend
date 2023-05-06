import { Box, Typography } from '@mui/material';
import CAR_IMG from '../../../assets/car_for_card.png';
import './styles.scss';
import YearInput from './YearInput';
import MileageInput from './MileageInput';
import PriceInput from './PriceInput';
import HPInput from './HPInput';
import { useAppSelector } from '../../../feature/hooks';
import FuelSelect from './FuelSelect';
import GearBoxSelect from './GearBoxSelect';

interface CarParamsCardProps {
  index: number;
  carName: string;
}

const CarParamsCard = ({ index, carName }: CarParamsCardProps) => {
  const bestCarId = useAppSelector((state) => state.currentSession.comparisonResultCarId);

  return (
    <Box className={`car-params-card ${bestCarId === index && 'active'}`}>
      <Box className="form">
        <Typography variant="h3">{carName}</Typography>
        <Box className="row">
          <YearInput index={index} />
          <MileageInput index={index} />
        </Box>
        <Box className="row">
          <PriceInput index={index} />
          <HPInput index={index} />
        </Box>
        <Box className="row">
          <FuelSelect index={index} />
          <GearBoxSelect index={index} />
        </Box>
      </Box>
      <img src={CAR_IMG} />
    </Box>
  );
};

export default CarParamsCard;
