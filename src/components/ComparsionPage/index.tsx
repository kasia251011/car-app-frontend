import { Box, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import CarParamsCard from './CarParamsCard';
import './style.scss';
import CompareButton from './CompareButton';
import ParametersWeights from './ParametersWeights/ParametersWeights';

const ComparisonPage = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Box className="car-compare-page">
        <Box className="header">
          <Typography variant="h1">Which car is better for you?</Typography>
          <Typography variant="subtitle1">
            Enter the parameters of two cars, algorithm will compare them for you, and tell you
            which is the better option.
          </Typography>
        </Box>
        <Box className="content">
          <CarParamsCard index={0} carName="First Car" />
          <CarParamsCard index={1} carName="Second Car" />
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

export default ComparisonPage;
