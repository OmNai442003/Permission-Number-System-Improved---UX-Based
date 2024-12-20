import { useState } from "react";
import Task1_Control_Course from "../../components/Task1/Task1_Control_Course";
import { TASK1 } from "../../utility/task1Const";
import Styled from "styled-components";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";
import courseData from "../../assets/json/task1ControlData.json"
import { useLocation } from 'react-router-dom';

function Task1Page_Control() {
    const location = useLocation();
    const { userInfo } = location.state;
    const navigate = useNavigate();
    const Container = Styled.div``;
    const [details, updateDetails] = useState({
        taskName: "Task1_Control",
        startDateTime: new Date()
    });
    
    const [stuff, updateStuff] = useState(courseData);

    function handleUpdatePriority(id, value) {
        // console.log("handleUpdatePriority",id, value);
        updateStuff(
            stuff.map(item =>
                (item.id == id) ? ({...item, priority: value}) : (item)
            )

        )
    }

    function handleUpdateSection(courseId, sectionId, value) {
        // console.log("handleUpdateSection", courseId, sectionId, value);
        updateStuff(
            stuff.map(
                item => (item.id == courseId) ? (
                    {
                        ...item, 
                        sections: (
                            item.sections.map(
                                sec => (sec.id == sectionId) ? (
                                    {
                                        ...sec,
                                        isSelected: !sec.isSelected
                                    }
                                ) : (sec)
                            ))
                    }) : (item)
            )
        )
    }

    function renderRow(course){
        return (
            <Task1_Control_Course
                key={course.id}
                course={course}
                handleUpdatePriority={handleUpdatePriority}
                handleUpdateSection={handleUpdateSection}
            />
        );
    };

    function save(e){
        e.preventDefault();
        let endDateTime = new Date();

        dataRepo.recordTask({
            ...details,
            endDateTime,
            data: stuff
        });

        navigate("/landing", { state: { userId: userInfo.id } });
    }

    return (
        <Container className="task-container">
            <div className="task-instruction">
                <h1>Task 1A</h1>
                <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>
            </div>

            <hr />

            {stuff.map(renderRow)}

            <br />
            <br />
            <button onClick={save}>Save</button>

        </Container>
    )
}

export default Task1Page_Control