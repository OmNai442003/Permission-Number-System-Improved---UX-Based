// This is the main file

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './screens/Landing/LandingPage';
import UserProfile from './screens/UserProfile/UserProfile';

const router = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage/>
  },
  {
    path:"/userprofile",
    element: <UserProfile/>
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
