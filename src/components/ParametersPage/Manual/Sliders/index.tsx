import { InputLabel, Slider } from '@mui/material';
import './style.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { Fragment, useEffect } from 'react';
import { useGetPrioritiesQuery } from '../../../../feature/services/carApi';
import { setIsQuizFinished } from '../../../../feature/currentSession/currentSession';
import { useAppDispatch, useAppSelector } from '../../../../feature/hooks';
import { ParametersWeights } from '../../../../feature/services/types/Car';

interface Mark {
  value: number;
  label: string;
}

function getSliderValues(name: string, defaultValue: number, label: string, marks?: Mark[]) {
  return { name, defaultValue, label, marks };
}

const SLIDER_VALUES = [
  getSliderValues('yearOfManufacture', 0, 'Year of manufacture'),
  getSliderValues('mileage', 0, 'Mileage'),
  getSliderValues('price', 0, 'Price'),
  getSliderValues('horsePower', 0, 'Horse power'),
  getSliderValues('typeOfFuel', 0, 'Type of fuel', [
    { value: 0, label: 'Economy' },
    { value: 1, label: 'Speed' }
  ]),
  getSliderValues('gearBox', 0, 'Gear box', [
    { value: 0, label: 'Comfort' },
    { value: 1, label: 'Control' }
  ])
];

const Sliders = () => {
  const { control, setValue } = useFormContext();
  const { data, refetch } = useGetPrioritiesQuery();
  const dispatch = useAppDispatch();
  const isQuizFinished = useAppSelector((state) => state.currentSession.isQuizFinished);

  useEffect(() => {
    if (data) {
      SLIDER_VALUES.forEach(({ name }) => {
        refetch();
        setValue(name, data?.[name as keyof ParametersWeights]);
      });
    }
  }, [data]);

  useEffect(() => {
    if (isQuizFinished) {
      dispatch(setIsQuizFinished(false));
      refetch();
    }
  }, [isQuizFinished]);

  return (
    <>
      {SLIDER_VALUES.map(({ name, defaultValue, label, marks }) => (
        <Fragment key={name}>
          <InputLabel className="slider-label">{label}</InputLabel>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
              <Slider {...field} className="slider" min={0} max={1} step={0.1} marks={marks} />
            )}
          />
        </Fragment>
      ))}
    </>
  );
};

export default Sliders;
