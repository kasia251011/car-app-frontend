import { Button, CircularProgress } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';
import { useGetBestCarMutation } from '../../../feature/services/carApi';
import { useAppDispatch } from '../../../feature/hooks';
import { setComparisonResultCarId } from '../../../feature/currentSession/currentSession';
import { Car } from '../../../feature/services/types/Car';

const CompareButton = () => {
  const { handleSubmit } = useFormContext();
  const [getBestCar, { isLoading, isSuccess, reset }] = useGetBestCarMutation();
  const dispatch = useAppDispatch();

  const sendData = async (data: FieldValues) => {
    const cars = data as Car[];

    const { id } = await getBestCar(cars).unwrap();
    dispatch(setComparisonResultCarId(id));
  };

  const resetComparison = () => {
    reset();
    dispatch(setComparisonResultCarId(null));
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
        sx={{ margin: '30px 0px', width: 'min-content' }}>
        Reset
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      onClick={handleSubmit(sendData)}
      sx={{ margin: '30px 0px', width: 'min-content' }}>
      Compare
    </Button>
  );
};

export default CompareButton;
