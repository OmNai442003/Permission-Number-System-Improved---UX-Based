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
                <Link to="/task1">Task 1</Link>
            </p>
        </>
    )
}

export default LandingPage