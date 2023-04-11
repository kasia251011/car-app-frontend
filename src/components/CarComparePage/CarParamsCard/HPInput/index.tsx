import { ErrorMessage } from '@hookform/error-message';
import { InputLabel, InputBase, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface HPInputProps {
  index: number;
}

const HPInput = ({ index }: HPInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <InputLabel className="label">Hourse power</InputLabel>
      <InputBase
        {...register(`carsParameters[${index}].horsePower`, {
          required: 'This input is required.',
          min: {
            message: 'The lowest hourse power possible is 0',
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
        name={`carsParameters[${index}].horsePower`}
        render={({ message }) => <Typography variant="error">{message}</Typography>}
      />
    </>
  );
};

export default HPInput;
