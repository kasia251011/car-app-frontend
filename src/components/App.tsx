import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import './app.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
