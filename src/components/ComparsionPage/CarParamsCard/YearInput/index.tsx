import { ErrorMessage } from '@hookform/error-message';
import { InputLabel, InputBase, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface YearInputProps {
  index: number;
}

const YearInput = ({ index }: YearInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
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
    </>
  );
};

export default YearInput;
