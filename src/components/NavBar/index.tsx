import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  return (
    <Box className="navbar">
      <Typography className="logo">B.</Typography>
      <NavLink to="/">
        <Button variant="nav">Home</Button>
      </NavLink>
      <NavLink to="/parameters">
        <Button variant="nav">Parameters</Button>
      </NavLink>
      <NavLink to="/comparison">
        <Button variant="nav">Comparison</Button>
      </NavLink>
    </Box>
  );
};

export default NavBar;
