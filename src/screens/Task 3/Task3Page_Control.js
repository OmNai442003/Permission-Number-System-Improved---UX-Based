import './task3.style.css'
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
`;

function Task3Page_Control() {
    return (
        <Container>
            <div className="headerOfTask">Task 3(Control)</div>
            <div className='formControl'>
                <form>
                <div className='formTitle'>Last Name</div>
                    <input className='task3Fileds' type="text" placeholder='Student Last Name' />
                    <br />
                    <div className='formTitle'>First Name</div>
                    <input className='task3Fileds' type="text" placeholder='Student First Name' />
                    <br />
                    <div className='formTitle'>Major</div>
                    <input className='task3Fileds' type="text" placeholder='Major' />
                    <br />
                    <div className='formTitle'>Student Id</div>
                    <input className='task3Fileds' type='text' placeholder='Student Id' />
                    <br />
                    <button className='task3Button' type='submit'>Submit</button>
                </form>
            </div>
        </Container>
    )
}

export default Task3Page_Control