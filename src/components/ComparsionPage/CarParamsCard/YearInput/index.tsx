import { ErrorMessage } from '@hookform/error-message';
import { InputLabel, InputBase, Typography, Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { InputProps } from '../GearBoxSelect';

const YearInput = ({ index }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <Box className="cell">
      <InputLabel className="label">Year of manufacture</InputLabel>
      <InputBase
        {...register(`carsParameters[${index}].yearOfManufacture`, {
          required: 'This input is required.',
          min: {
            message: 'Enter the year between 1900 and the current year',
            value: 1900
          },
          max: {
            message: 'Enter the year between 1900 and the current year',
            value: new Date().getFullYear()
          },
          pattern: {
            value: /\d+/,
            message: 'This input is number only.'
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name={`carsParameters[${index}].yearOfManufacture`}
        render={({ message }) => <Typography variant="error">{message}</Typography>}
      />
    </Box>
  );
};

export default YearInput;
