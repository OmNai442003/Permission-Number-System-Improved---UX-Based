import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import userDataAll from '../../assets/json/data.json';
import './landingPage.style.css'
import BoxDisplayCard from "../../components/BoxDisplayCard/BoxDisplayCard";

const LandingPage = () => {
    const receivedLocation = useLocation();
    const { userId } = receivedLocation.state || {};
    const userData = userDataAll.find((user) => user.id === +userId);
    return (
        <>
            <Navbar name={userData.name} stid={userData.id} />
            <BoxDisplayCard />
            <p>
                Welcome to the landing page! Here, you can navigate to different components as we continue building.
            </p>
            <nav>
                <ul className="listTile">
                    <li><Link to="/userprofile" state={{ userInfo: userData }} >User Profile</Link></li>
                    <li><Link to="/task1A">Task 1 (Control)</Link></li>
                    <li><Link to="/task1B">Task 1 (Experiment)</Link></li>
                    <li><Link to="/task2A">Task 2 (Control)</Link></li>
                    <li><Link to="/task2B">Task 2 (Experiment)</Link></li>
                    <li><Link to="/task4A">Task 4 (Control)</Link></li>
                    <li><Link to="/task4B">Task 4 (Experiment)</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default LandingPage;
