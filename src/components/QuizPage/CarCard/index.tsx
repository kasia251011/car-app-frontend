import { Card, CardMedia, CardContent, Typography, Box, CardActionArea } from '@mui/material';
import { Car } from '../../../feature/services/types/CarParameters';
import CAR_DEFAULT_IMG from '../../../assets/car-default.svg';
import './styles.scss';
import { useAppDispatch } from '../../../feature/hooks';
import { setComparisonResultCarId } from '../../../feature/currentSession/currentSession';

const CarCard = ({
  id,
  name,
  yearOfManufacture,
  mileage,
  price,
  typeOfFuel,
  horsePower,
  gearBox,
  img
}: Car) => {
  const dispatch = useAppDispatch();

  const setSelectedCarId = () => {
    dispatch(setComparisonResultCarId(id ?? 0));
  };

  return (
    <Card className="car-card">
      <CardActionArea onClick={setSelectedCarId}>
        <CardMedia
          image={img ?? CAR_DEFAULT_IMG}
          sx={{ height: 207, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
        <CardContent>
          <Typography variant="h3">{name}</Typography>
          <Box className="row">
            <Box className="cell">
              <Typography className="label">Year of manufacture</Typography>
              <Typography className="value">{yearOfManufacture}</Typography>
            </Box>
            <Box className="cell">
              <Typography className="label">Mileage</Typography>
              <Typography className="value">{mileage}</Typography>
            </Box>
          </Box>
          <Box className="row">
            <Box className="cell">
              <Typography className="label">Price</Typography>
              <Typography className="value">{price}</Typography>
            </Box>
            <Box className="cell">
              <Typography className="label">Horse power</Typography>
              <Typography className="value">{horsePower}</Typography>
            </Box>
          </Box>
          <Box className="row">
            <Box className="cell">
              <Typography className="label">Type of fuel</Typography>
              <Typography className="value">{typeOfFuel}</Typography>
            </Box>
            <Box className="cell">
              <Typography className="label">Gear box</Typography>
              <Typography className="value">{gearBox}</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
