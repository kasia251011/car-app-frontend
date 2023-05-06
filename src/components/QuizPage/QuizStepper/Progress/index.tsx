import { Box, CircularProgress, Typography } from '@mui/material';
import './styles.scss';

interface ProgressProps {
  step: number;
  maxStep: number;
}

const Progress = ({ step, maxStep }: ProgressProps) => {
  const calculatePercent = () => {
    return (step * 100) / maxStep;
  };

  return (
    <Box className="progress-container">
      <CircularProgress
        variant="determinate"
        className="progress"
        value={calculatePercent()}
        size={150}
      />
      <CircularProgress
        variant="determinate"
        className="path"
        value={100}
        size={150}
        color="success"
      />
      <Box className="value-container">
        <Typography variant="caption" component="div" className="value">
          {`${Math.round(step)}/${maxStep}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Progress;
