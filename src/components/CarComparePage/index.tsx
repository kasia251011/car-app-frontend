import { Box, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import CarParamsCard from './CarParamsCard';
import './style.scss';
import CompareButton from './CompareButton';
import ParametersWeights from './ParametersWeights/ParametersWeights';

const CarComparePage = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Box className="car-compare-page">
        <Box className="header">
          <Typography variant="h1">Which car is better for you?</Typography>
          <Typography variant="subtitle1">
            Enter parameters for two cars, AI will compare them for you, and tell which is better
            option
          </Typography>
        </Box>
        <Box className="content">
          <CarParamsCard index={1} carName="First Car" />
          <CarParamsCard index={2} carName="Second Car" />
          <Box className="left-container">
            <Box className="weights">
              <CompareButton />
              <Typography marginTop={'20px'} align="center" variant="h3">
                How important are for you those parameters?
              </Typography>
              <ParametersWeights />
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default CarComparePage;
