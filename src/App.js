// This is the main file

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './screens/Landing/LandingPage';
import UserProfile from './screens/UserProfile/UserProfile';
import Task1Page_Control from './screens/Task1/Task1Page_Control';
import Task1Page_Experiment from './screens/Task1/Task1Page_Experiment';

const router = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage/>
  },
  {
    path:"/userprofile",
    element: <UserProfile/>
  },
  {
    path:"/task1A",
    element: <Task1Page_Control/>
  },
  {
    path:"/task1B",
    element: <Task1Page_Experiment/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
