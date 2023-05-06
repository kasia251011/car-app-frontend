import { Box, Button, Typography } from '@mui/material';
import './styles.scss';
import WOMAN_IN_CAR_IMG from '../../assets/woman_in_car.svg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box className="home-page">
      <Box>
        <Typography variant="h1">
          Discover Your Dream Car : <br></br>
          AI Will Help You!
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: '20px' }}>
          {`We understand that choosing the right car can be a daunting task, with so many options available on the market. That's why we're here to help you make an informed decision and find the car that best fits your needs and preferences.`}
        </Typography>
        <Box className="step">
          <Typography className="number">1</Typography>
          <Typography variant="subtitle1">
            Set car parameters importance manually or take a quiz
          </Typography>
        </Box>
        <Box className="step" sx={{ marginBottom: '20px' }}>
          <Typography className="number">2</Typography>
          <Typography variant="subtitle1">
            Enter parameters values for two cars and compare them according to parameters you set{' '}
          </Typography>
        </Box>
        <Typography className="question">
          How do you want to set your perfect car parameters?
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{ marginRight: '20px' }}
            onClick={() => navigate('/quiz')}>
            Take A Quiz
          </Button>
          <Button>Manual</Button>
        </Box>
      </Box>
      <img src={WOMAN_IN_CAR_IMG} />
    </Box>
  );
};

export default HomePage;
