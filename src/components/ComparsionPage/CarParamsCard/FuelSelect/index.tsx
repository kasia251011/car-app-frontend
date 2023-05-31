import { InputLabel, Box, MenuItem, Select } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { FUEL_TYPES } from '../../../../feature/services/types/Car';
import { InputProps } from '../GearBoxSelect';

function formatOption(option: string) {
  return option.toLowerCase().replace('_', ' ');
}

const FuelSelect = ({ index }: InputProps) => {
  const { register } = useFormContext();
  return (
    <Box className="cell">
      <InputLabel className="label">Type of fuel</InputLabel>
      <Select {...register(`carsParameters[${index}].typeOfFuel`)} defaultValue={FUEL_TYPES[0]}>
        {FUEL_TYPES.map((fuel) => (
          <MenuItem key={fuel} value={fuel}>
            {formatOption(fuel)}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default FuelSelect;
