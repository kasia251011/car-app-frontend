import { Box, Button } from '@mui/material';
import Progress from './Progress';
import { useMemo, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../feature/hooks';
import { setComparisonResultCarId } from '../../../feature/currentSession/currentSession';

const MAX_STEPS = 20;

const QuizStepper = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedCarId = useAppSelector((state) => state.currentSession.comparisonResultCarId);

  const quizIsNotFinished = useMemo(() => {
    return step + 1 <= MAX_STEPS;
  }, [step]);

  const navigateToParameters = () => {
    navigate('/parameters', { relative: 'path' });
  };

  const nextStep = () => {
    if (quizIsNotFinished) {
      //TODO: put car id
      setStep((prevStep) => prevStep + 1);
    } else {
      //TODO: after navigate get params, and display them
      navigateToParameters();
    }
    dispatch(setComparisonResultCarId(null));
  };

  return (
    <Box className="quiz-stepper">
      <Progress step={step} maxStep={MAX_STEPS} />
      <Button
        variant="contained"
        onClick={nextStep}
        className="next-btn"
        disabled={selectedCarId === null}>
        {quizIsNotFinished ? 'Next' : 'Finish quiz & get new params'}
      </Button>
      {quizIsNotFinished && <Button onClick={navigateToParameters}>Cancel</Button>}
    </Box>
  );
};

export default QuizStepper;
