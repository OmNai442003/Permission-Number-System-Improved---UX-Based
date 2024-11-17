import React from 'react'
import { useLocation } from 'react-router-dom';


function Task3Page_Experiment() {
    const location = useLocation();
    const { userInfo } = location.state;
    return (
        <div className='formExp'>
            <form>
                <input type="text" placeholder={userInfo.name} disabled  />
                <br />
                <input type='text' placeholder={userInfo.id} disabled  />
                <br />
                <button className='task3Button' type='submit'>Submit</button>
            </form>
        </div>)
}

export default Task3Page_Experiment