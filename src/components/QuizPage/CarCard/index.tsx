import { Card, CardMedia, CardContent, Typography, Box, CardActionArea } from '@mui/material';
import { Car } from '../../../feature/services/types/Car';
import CAR_DEFAULT_IMG from '../../../assets/car-default.svg';
import './styles.scss';
import { useAppDispatch } from '../../../feature/hooks';
import { setQuizSelectedCarId } from '../../../feature/currentSession/currentSession';

const CarCard = ({ id, name, parameters, img }: Car) => {
  const dispatch = useAppDispatch();

  const setSelectedCarId = () => {
    dispatch(setQuizSelectedCarId(id ?? 0));
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
              <Typography className="value">{parameters.yearOfManufacture}</Typography>
            </Box>
            <Box className="cell">
              <Typography className="label">Mileage</Typography>
              <Typography className="value">{parameters.mileage}</Typography>
            </Box>
          </Box>
          <Box className="row">
            <Box className="cell">
              <Typography className="label">Price</Typography>
              <Typography className="value">{parameters.price}</Typography>
            </Box>
            <Box className="cell">
              <Typography className="label">Horse power</Typography>
              <Typography className="value">{parameters.horsePower}</Typography>
            </Box>
          </Box>
          <Box className="row">
            <Box className="cell">
              <Typography className="label">Type of fuel</Typography>
              <Typography className="value">{parameters.typeOfFuel}</Typography>
            </Box>
            <Box className="cell">
              <Typography className="label">Gear box</Typography>
              <Typography className="value">{parameters.gearBox}</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
