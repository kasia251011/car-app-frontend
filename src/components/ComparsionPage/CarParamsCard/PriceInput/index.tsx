import { ErrorMessage } from '@hookform/error-message';
import { InputLabel, InputBase, Typography, Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { InputProps } from '../GearBoxSelect';

const PriceInput = ({ index }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <Box className="cell">
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
    </Box>
  );
};

export default PriceInput;
