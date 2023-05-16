import { Box, Button, Typography } from '@mui/material';
import QUIZ_ICON from '../../../assets/quiz-icon.svg';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const QuizPreview = () => {
  const navigate = useNavigate();
  return (
    <Box className="quiz-preview">
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Take A Quiz
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ marginBottom: '20px' }}>
        You don’t know yet what is the most important in your future car? <br></br>Take a quiz,
        choose between pair of cars, and AI will generate the best weights parameter accoarding to
        your choises
      </Typography>
      <img src={QUIZ_ICON} />
      <Button variant="contained" sx={{ marginTop: '40px' }} onClick={() => navigate('/quiz')}>
        Start a quiz
      </Button>
    </Box>
  );
};

export default QuizPreview;
