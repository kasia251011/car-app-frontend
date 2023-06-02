import { InputLabel, Box, MenuItem, Select } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { GEAR_BOX_TYPES } from '../../../../feature/services/types/Car';

export interface InputProps {
  index: number;
}

function formatOption(option: string) {
  return option.toLowerCase().replace('_', ' ');
}

const GearBoxSelect = ({ index }: InputProps) => {
  const { register } = useFormContext();
  return (
    <Box className="cell">
      <InputLabel className="label">Gear box</InputLabel>
      <Select {...register(`carsParameters[${index}].gearBox`)} defaultValue={GEAR_BOX_TYPES[0]}>
        {GEAR_BOX_TYPES.map((gearBox) => (
          <MenuItem key={gearBox} value={gearBox}>
            {formatOption(gearBox)}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default GearBoxSelect;
