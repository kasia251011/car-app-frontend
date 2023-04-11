import { ErrorMessage } from '@hookform/error-message';
import { InputLabel, InputBase, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface PriceInputProps {
  index: number;
}

const PriceInput = ({ index }: PriceInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <InputLabel className="label">Price</InputLabel>
      <InputBase
        {...register(`carsParameters[${index}].price`, {
          required: 'This input is required.',
          min: {
            message: 'The lowest price possible is 0',
            value: 0
          },
          pattern: {
            value: /\d+/,
            message: 'This input is number only.'
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name={`carsParameters[${index}].price`}
        render={({ message }) => <Typography variant="error">{message}</Typography>}
      />
    </>
  );
};

export default PriceInput;
