import { InputLabel, Slider } from '@mui/material';
import './style.scss';
import { Controller, useFormContext } from 'react-hook-form';
import React from 'react';

interface Mark {
  value: number;
  label: string;
}

function getSliderValues(name: string, defaultValue: number, label: string, marks?: Mark[]) {
  return { name, defaultValue, label, marks };
}

const SLIDER_VALUES = [
  getSliderValues('parametersWeight.yearOfManufacture', 0.1, 'Year of manufacture'),
  getSliderValues('parametersWeight.mileageWeight', 0.7, 'Mileage'),
  getSliderValues('parametersWeight.priceWeight', 0.2, 'Price'),
  getSliderValues('parametersWeight.horsePowerWeight', 0.4, 'Horse power'),
  getSliderValues('parametersWeight.typeOfFuelWeight', 0.3, 'Type of fuel', [
    { value: 0, label: 'Economy' },
    { value: 1, label: 'Speed' }
  ]),
  getSliderValues('parametersWeight.gearBoxWeight', 0.6, 'Gear box', [
    { value: 0, label: 'Comfort' },
    { value: 1, label: 'Control' }
  ])
];

const ParametersWeights = () => {
  const { control } = useFormContext();

  return (
    <>
      {SLIDER_VALUES.map(({ name, defaultValue, label, marks }) => (
        <React.Fragment key={name}>
          <InputLabel className="slider-label">{label}</InputLabel>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
              <Slider {...field} className="slider" min={0} max={1} step={0.1} marks={marks} />
            )}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default ParametersWeights;
