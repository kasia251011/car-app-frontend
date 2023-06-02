import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import './style.scss';
import QuizPreview from './QuizPreview';
import Manual from './Manual';

const ParametersPage = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Box className="parameters-page">
        <QuizPreview />
        <Manual />
      </Box>
    </FormProvider>
  );
};

export default ParametersPage;
