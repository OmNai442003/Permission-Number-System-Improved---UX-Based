import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <p>
                This is the default landing page meant to allow navigation to different components as we start to build.
            </p>
            <p>
                <Link to="/userprofile">User Profile</Link>
                <br />
                <Link to="/task1A">Task 1A</Link>
                <br />
                <Link to="/task1B">Task 1B</Link>
                <br />
                <Link to="/task2A">Task 2A</Link>
                <br />
                <Link to="/task2B">Task 2B</Link>
                <br />
                <Link to="/task4A">Task 4 (Control)</Link>
                <br />
                <Link to="/task4B">Task 4 (Experiment)</Link>
            </p>
        </>
    )
}

export default LandingPage