import { Box, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import CarParamsCard from './CarParamsCard';
import './style.scss';
import CompareButton from './CompareButton';

const ComparisonPage = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Box className="car-compare-page">
        <Box className="header">
          <Typography variant="h2" mb="5px" mt="20px">
            You cannot decide between two cars?
          </Typography>
          <Typography variant="subtitle1" mb="40px">
            Enter the parameters of two cars, algorithm will compare them for you, and tell you
            which is the better option.
          </Typography>
        </Box>
        <Box className="content">
          <CarParamsCard index={0} carName="First Car" />
          <CarParamsCard index={1} carName="Second Car" />
        </Box>
        <CompareButton />
      </Box>
    </FormProvider>
  );
};

export default ComparisonPage;
