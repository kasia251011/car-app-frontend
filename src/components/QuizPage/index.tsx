import { Box, Typography } from '@mui/material';
import CarCard from './CarCard';
import QuizStepper from './QuizStepper';
import './styles.scss';
import QuizBackground from './QuizBackground';
import { useLazyGetCarsForQuizQuery } from '../../feature/services/carApi';
import { useEffect } from 'react';

const QuizPage = () => {
  const [getCars, { data }] = useLazyGetCarsForQuizQuery();

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Box className="quiz-page">
      <Typography variant="h2" mb="5px" mt="20px">
        Select better car
      </Typography>
      <Typography variant="subtitle1" mb="40px">
        {` In this quiz, you are shown pair of cars and you have to choose which one you prefer. Don't overthink it - just go with your gut!`}
      </Typography>
      <Box className="content">
        <Box className="quiz">
          <Box className="car-cards">
            {data && (
              <>
                <CarCard {...data[0]} />
                <CarCard {...data[1]} />
              </>
            )}
          </Box>
          <QuizBackground />
        </Box>
        <Box className="stepper">
          <QuizStepper />
        </Box>
      </Box>
    </Box>
  );
};

export default QuizPage;
