import { Button } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';
// import { useGetBestCarMutation } from '../../../feature/services/carParametersApi';
import { CarsInfo } from '../../../feature/services/types/CarParameters';

const CompareButton = () => {
  const { handleSubmit } = useFormContext();
  // const [getBestCar] = useGetBestCarMutation();

  const sendData = (data: FieldValues) => {
    const carsinfo: CarsInfo = {
      carsParameters: data.carsParameters,
      parametersWeight: data.parametersWeight
    };
    // const id = getBestCar(carsinfo);
    // console.log(id);
    console.log(carsinfo);
  };

  return (
    <Button variant="contained" onClick={handleSubmit(sendData)} sx={{ margin: '30px 0px' }}>
      Compare
    </Button>
  );
};

export default CompareButton;
