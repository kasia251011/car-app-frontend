import { InputLabel, Slider } from '@mui/material';
import './style.scss';
import { Controller, useFormContext } from 'react-hook-form';
import React from 'react';

function getSliderValues(name: string, defaultValue: number, label: string) {
  return { name, defaultValue, label };
}

const SLIDER_VALUES = [
  getSliderValues('parametersWeight.yearOfManufacture', 0.1, 'Year of manufacture'),
  getSliderValues('parametersWeight.mileageWeight', 0.7, 'Mileage'),
  getSliderValues('parametersWeight.priceWeight', 0.2, 'Price'),
  getSliderValues('parametersWeight.horsePowerWeight', 0.4, 'Horse power'),
  getSliderValues('parametersWeight.typeOfFuelWeight', 0.3, 'Type of fuel'),
  getSliderValues('parametersWeight.gearBoxWeight', 0.6, 'Gear box'),
  getSliderValues('parametersWeight.wheelDriveWeight', 0.2, 'Wheel drive')
];

const ParametersWeights = () => {
  const { control } = useFormContext();

  return (
    <>
      {SLIDER_VALUES.map(({ name, defaultValue, label }) => (
        <React.Fragment key={name}>
          <InputLabel className="slider-label">{label}</InputLabel>
          <Controller
            name={name}
            control={control}
            render={({ field: { value, ...field } }) => (
              <Slider
                {...field}
                className="slider"
                min={0}
                max={1}
                step={0.1}
                value={value ?? defaultValue}
              />
            )}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default ParametersWeights;
