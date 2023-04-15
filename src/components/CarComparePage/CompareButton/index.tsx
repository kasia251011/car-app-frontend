import { Button, CircularProgress } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';
import { useGetBestCarMutation } from '../../../feature/services/carParametersApi';
import { CarsInfo } from '../../../feature/services/types/CarParameters';
import { useAppDispatch } from '../../../feature/hooks';
import { setBestCarId } from '../../../feature/currentSession/currentSession';

const CompareButton = () => {
  const { handleSubmit } = useFormContext();
  const [getBestCar, { isLoading, isSuccess, reset }] = useGetBestCarMutation();
  const dispatch = useAppDispatch();

  const sendData = async (data: FieldValues) => {
    const carsinfo: CarsInfo = {
      carsParameters: data.carsParameters,
      parametersWeight: data.parametersWeight
    };

    const id = await getBestCar(carsinfo).unwrap();
    dispatch(setBestCarId(id));
  };

  const resetComparison = () => {
    reset();
    dispatch(setBestCarId(null));
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isSuccess) {
    return (
      <Button
        variant="contained"
        color="error"
        onClick={resetComparison}
        sx={{ margin: '30px 0px' }}>
        Reset
      </Button>
    );
  }

  return (
    <Button variant="contained" onClick={handleSubmit(sendData)} sx={{ margin: '30px 0px' }}>
      Compare
    </Button>
  );
};

export default CompareButton;
