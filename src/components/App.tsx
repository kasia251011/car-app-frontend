import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import './styles.scss';
import { Box } from '@mui/material';

const App = () => {
  return (
    <>
      <NavBar />
      <Box className="page">
        <Outlet />
      </Box>
    </>
  );
};

export default App;
