import { Box, Button, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import './style.scss';
import ParametersWeights from './ParametersWeights/ParametersWeights';
import { useNavigate } from 'react-router-dom';
import QuizPreview from './QuizPreview/QuizPreview';

const ParametersPage = () => {
  const methods = useForm();
  const navigate = useNavigate();

  return (
    <FormProvider {...methods}>
      <Box className="parameters-page">
        <QuizPreview />
        <Box className="manual-parameter-selection">
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
