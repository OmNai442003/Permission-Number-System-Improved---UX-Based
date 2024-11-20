import React from 'react'
import { useLocation } from 'react-router-dom';
import './task3.style.css'
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
`;

function Task3Page_Experiment() {
    const location = useLocation();
    const { userInfo } = location.state;
    const [firstName, lastName] = userInfo.name.split(' ');
    return (
        <Container>
            <div className="headerOfTask">Task 3(Experiiment)</div>
            <div className='formExp'>
                <form>
                    <div className='formTitle'>Last Name</div>
                    <input className='task3Fileds' type="text" value={lastName} disabled />
                    <br />
                    <div className='formTitle'>First Name</div>
                    <input className='task3Fileds' type="text" value={firstName} disabled />
                    <br />
                    <div className='formTitle'>Major</div>
                    <input className='task3Fileds' type="text" value={userInfo.major} disabled />
                    <br />
                    <div className='formTitle'>Student Id</div>
                    <input className='task3Fileds' type='text' value={userInfo.id} disabled />
                    <br />
                    <button className='task3Button' type='submit'>Submit</button>
                </form>
            </div>
        </Container>
    )
}

export default Task3Page_Experiment