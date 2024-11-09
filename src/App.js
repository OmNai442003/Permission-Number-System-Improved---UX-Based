// This is the main file

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './screens/Landing/LandingPage';
import UserProfile from './screens/UserProfile/UserProfile';
import Task1Page_Control from './screens/Task1/Task1Page_Control';
import Task1Page_Experiment from './screens/Task1/Task1Page_Experiment';
import Task2Page_Control from './screens/Task2/Task2Page_Control';
import Task2Page_Experiment from './screens/Task2/Task2Page_Experiment';
import Task4Page_Control from './screens/Task4/Task4Page_Control';
import Task4Page_Experiment from './screens/Task4/Task4Page_Experiment';
import Login from './screens/Login/Login';

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
  },
  {
    path:"/task2A",
    element: <Task2Page_Control/>
  },
  {
    path:"/task2B",
    element: <Task2Page_Experiment/>
  },{
    path:"/task4A",
    element: <Task4Page_Control/>
  },
  {
    path:"/task4B",
    element: <Task4Page_Experiment/>
  },
  {
    path:"/login",
    element: <Login /> 
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
