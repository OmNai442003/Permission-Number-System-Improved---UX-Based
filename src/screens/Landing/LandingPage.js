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
            <div className="displayBoxContainer">
                <Link to="/userprofile" state={{ userInfo: userData }} >
                    <BoxDisplayCard />
                </Link>

            </div>
            <p>
                Welcome to the landing page! Here, you can navigate to different components as we continue building.
            </p>
            <nav>
                <ul className="listTile">
                    <li><Link to="/userprofile" state={{ userInfo: userData }} >User Profile</Link></li>
                    <li><Link to="/task1A">Task 1A</Link></li>
                    <li><Link to="/task1B">Task 1B</Link></li>
                    <li><Link to="/task2A">Task 2A</Link></li>
                    <li><Link to="/task2B">Task 2B</Link></li>
                    <li><Link to="/task3A">Task 3A</Link></li>
                    <li><Link to="/task3B" state={{ userInfo: userData }} >Task 3B</Link></li>
                    <li><Link to="/task4A">Task 4A</Link></li>
                    <li><Link to="/task4B">Task 4B</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default LandingPage;
