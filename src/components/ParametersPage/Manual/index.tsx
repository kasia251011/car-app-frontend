import { Box, Typography, Button } from '@mui/material';
import Sliders from './Sliders';
import { useSendPrioritiesMutation } from '../../../feature/services/carApi';
import { FormProvider, useForm } from 'react-hook-form';
import { ParametersWeights } from '../../../feature/services/types/Car';

const Manual = () => {
  const methods = useForm<ParametersWeights>();
  const [sendPriorities] = useSendPrioritiesMutation();

  const sendData = async (data: ParametersWeights) => {
    sendPriorities(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(sendData)}>
        <Box className="manual-parameter-selection">
          <Typography variant="h2" sx={{ marginBottom: '20px' }}>
            Set car parameters weights manual
          </Typography>
          <Typography variant="subtitle1" align="center">
            You are sure what are you looking for in you dream car? <br></br>Set each car parameter
            according to your needs
          </Typography>
          <Box className="parameters-weights-container">
            <Sliders />
          </Box>
          <Button variant="contained" type="submit" sx={{ marginTop: '10px' }}>
            Set Weights
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Manual;
