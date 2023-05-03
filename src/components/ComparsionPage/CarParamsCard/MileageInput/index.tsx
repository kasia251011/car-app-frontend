import { ErrorMessage } from '@hookform/error-message';
import { InputLabel, InputBase, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface MileageInputProps {
  index: number;
}

const MileageInput = ({ index }: MileageInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <InputLabel className="label">Mileage</InputLabel>
      <InputBase
        {...register(`carsParameters[${index}].mileage`, {
          required: 'This input is required.',
          min: {
            message: 'The lowest mileage possible is 0',
            value: 0
          },
          max: {
            message: 'The highest mileage possible is 1000000',
            value: 1000000
          },
          pattern: {
            value: /\d+/,
            message: 'This input is number only.'
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name={`carsParameters[${index}].mileage`}
        render={({ message }) => <Typography variant="error">{message}</Typography>}
      />
    </>
  );
};

export default MileageInput;
