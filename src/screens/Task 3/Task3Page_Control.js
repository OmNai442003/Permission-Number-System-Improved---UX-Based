import './task3.style.css'
import styled from "styled-components";
import { useState, React } from "react";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
`;

function Task3Page_Control() {
    
    const navigate = useNavigate();
    // Initialize state for form fields
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [major, setMajor] = useState('');
    const [studentId, setStudentId] = useState('');
    const [details, updateDetails] = useState({
        taskName: "Task3_Control",
        startDateTime: new Date()
    });

    function save(e){
        e.preventDefault();
        let endDateTime = new Date();

        dataRepo.recordTask({
            ...details,
            lastName,
            firstName,
            major,
            studentId,
            endDateTime
        });

        navigate("/");
    }
    return (
        <Container>
            <div className="headerOfTask">Task 3(Control)</div>
            <div className='formControl'>
            <form onSubmit={save}>
                    <div className='formTitle'>Last Name</div>
                    <input
                        className='task3Fileds'
                        type="text"
                        placeholder='Student Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />
                    <div className='formTitle'>First Name</div>
                    <input
                        className='task3Fileds'
                        type="text"
                        placeholder='Student First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <br />
                    <div className='formTitle'>Major</div>
                    <input
                        className='task3Fileds'
                        type="text"
                        placeholder='Major'
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                    />
                    <br />
                    <div className='formTitle'>Student Id</div>
                    <input
                        className='task3Fileds'
                        type='text'
                        placeholder='Student Id'
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    />
                    <br />
                    <button className='task3Button' type='submit'>Submit</button>
                </form>
            </div>
        </Container>
    )
}

export default Task3Page_Control