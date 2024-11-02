// This is the main file

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './screens/Landing/LandingPage';
import UserProfile from './screens/UserProfile/UserProfile';
import Task1Page from './screens/Task1/Task1Page';

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
    path:"/task1",
    element: <Task1Page/>
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
