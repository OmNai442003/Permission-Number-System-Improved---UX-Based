import { useState } from "react";
import Task2_Control_Course from "../../components/Task2/Task2_Control_Course";
import { TASK2 } from "../../utility/task2Const";
import Styled from "styled-components";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";
import courseData from "../../assets/json/task2ControlData.json"
import { useLocation } from 'react-router-dom';

function Task2Page_Control() {
    const location = useLocation();
    const { userInfo } = location.state;
    const navigate = useNavigate();
    const Container = Styled.div``;
    const [details, updateDetails] = useState({
        taskName: "Task2_Control",
        startDateTime: new Date()
    });

    const [courses, updateCourses] = useState(courseData);

    function handleUpdatePriority(id, value) {
        // console.log("handleUpdatePriority",id, value);
        updateCourses(
            courses.map(item =>
                (item.id == id) ? ({...item, priority: value}) : (item)
            )

        )
    }

    function handleUpdatePreference(id, value) {
        // console.log("handleUpdatePreference",id, value);
        updateCourses(
            courses.map(item =>
                (item.id == id) ? ({...item, preference: value}) : (item)
            )

        )
    }

    function handleUpdateSection(courseId, sectionId, value) {
        // console.log("handleUpdateSection", courseId, sectionId, value);
        updateCourses(
            courses.map(
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
            <Task2_Control_Course
                key={course.id}
                course={course}
                handleUpdatePriority={handleUpdatePriority}
                handleUpdateSection={handleUpdateSection}
                handleUpdatePreference={handleUpdatePreference}
            />
        );
    };

    function save(e){
        e.preventDefault();
        let endDateTime = new Date();

        dataRepo.recordTask({
            ...details,
            endDateTime,
            data: courses
        });

        navigate("/landing", { state: { userId: userInfo.id } });
    }

    return (
        <Container className="task-container">
            <div className="task-instruction">
                <h1>Task 2A</h1>
                <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>
            </div>

            <hr />

            {courses.map(renderRow)}

            <br />
            <br />
            <button onClick={save}>Save</button>

        </Container>
    )
}

export default Task2Page_Control