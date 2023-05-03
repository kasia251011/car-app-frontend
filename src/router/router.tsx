import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import HomePage from '../components/HomePage';
import ParametersPage from '../components/ParametersPage';
import ComparisonPage from '../components/ComparsionPage';
import QuizPage from '../components/QuizPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/parameters',
        element: <ParametersPage />
      },
      {
        path: '/comparison',
        element: <ComparisonPage />
      },
      {
        path: '/quiz',
        element: <QuizPage />
      }
    ]
  }
]);

export default router;
