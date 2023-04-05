import { Box, InputBase, Typography } from '@mui/material';
import CAR_IMG from '../../assets/car_for_card.png';
import './styles.scss';

const CarParamsCard = () => {
  return (
    <Box className="car-params-card">
      <Box className="input-container">
        <Typography variant="h2" className="label">
          First Car
        </Typography>
        <Box className="inputs">
          <Box>
            <Typography variant="h3">Year of manufacture</Typography>
            <InputBase />
          </Box>
          <Box>
            <Typography variant="h3">Mileage</Typography>
            <InputBase />
          </Box>
          <Box>
            <Typography variant="h3">Price</Typography>
            <InputBase />
          </Box>
          <Box>
            <Typography variant="h3">Horsepower</Typography>
            <InputBase />
          </Box>
          <Box>
            <Typography variant="h3">Type of fuel</Typography>
            <InputBase />
          </Box>
          <Box>
            <Typography variant="h3">Gear box</Typography>
            <InputBase />
          </Box>
        </Box>
      </Box>
      <Box className="image-container">
        <img src={CAR_IMG} />
      </Box>
    </Box>
  );
};

export default CarParamsCard;
