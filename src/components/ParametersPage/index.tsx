import { Box, Button, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import './style.scss';
import ParametersWeights from './ParametersWeights/ParametersWeights';
import QUIZ_ICON from '../../assets/quiz-icon.svg';
import { useNavigate } from 'react-router-dom';

const ParametersPage = () => {
  const methods = useForm();
  const navigate = useNavigate();

  return (
    <FormProvider {...methods}>
      <Box className="parameters-page">
        <Box className="content-container">
          <Typography variant="h2" sx={{ marginBottom: '20px' }}>
            Take A Quiz
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ marginBottom: '20px' }}>
            Don’t know yet what are the most important in your future car? <br></br>Take a quiz,
            choose between pair of cars, and AI will generate best parameter weights accoarding to
            your choises
          </Typography>
          <img src={QUIZ_ICON} />
          <Button variant="contained" sx={{ marginTop: '40px' }} onClick={() => navigate('/quiz')}>
            Start a quiz
          </Button>
        </Box>
        <Box className="parameters-container">
          <Typography variant="h2" sx={{ marginBottom: '20px' }}>
            Set car parameters weights manual
          </Typography>
          <Typography variant="subtitle1" align="center">
            You are sure what are you looking for in you dream car? <br></br>Set each car parameter
            accoarding to your needs
          </Typography>
          <Box className="parameters-weights-container">
            <ParametersWeights />
          </Box>
          <Button variant="contained" onClick={() => navigate('/quiz')}>
            Send param
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default ParametersPage;
