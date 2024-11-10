import { useState } from "react";
import Task1_Control_Course from "../../components/Task1/Task1_Control_Course";
import { TASK1 } from "../../utility/task1Const";
import Styled from "styled-components";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";

function Task1Page_Control() {
    const navigate = useNavigate();
    const Container = Styled.div``;
    const [details, updateDetails] = useState({
        taskName: "Task1_Control",
        startDateTime: new Date()
    });
    
    const [stuff, updateStuff] = useState([
        {
            id: 1,
            name: "Class A",
            description: "A class on the topic of 'A'.",
            sections:[
                {
                    lecture:{
                        days: ['M', 'W', 'F'],
                        startHour: 11,
                        startMinute: 0,
                        endHour: 11,
                        endMinute: 50,
                    }
                }
            ],
            priority: TASK1.control.corePriority.unset
        },
        {
            id: 2,
            name: "Class B",
            description: "A class on the topic of 'B'.",
            sections:[
                {
                    id: 1,
                    isSelected: false,
                    lecture: {
                        days: ['T', 'Th'],
                        startHour: 11,
                        startMinute: 0,
                        endHour: 12,
                        endMinute: 15,
                    },
                    lab: {
                        days: ['M'],
                        startHour: 9,
                        startMinute: 0,
                        endHour: 10,
                        endMinute: 50
                    }
                },
                {
                    id: 2,
                    isSelected: false,
                    lecture: {
                        days: ['M', 'W', 'F'],
                        startHour: 11,
                        startMinute: 0,
                        endHour: 11,
                        endMinute: 50,
                    },
                    lab: {
                        days: ['Th'],
                        startHour: 13,
                        startMinute: 0,
                        endHour: 14,
                        endMinute: 50
                    }
                }
            ],
            priority: TASK1.control.corePriority.unset
        },
        {
            id: 3,
            name: "Class C",
            description: "A class on the topic of 'C'.",
            sections: [
                {
                    lecture: {
                        days: ['W'],
                        startHour: 14,
                        startMinute: 0,
                        endHour: 16,
                        endMinute: 30,
                    }
                }
            ],            
            priority: TASK1.control.corePriority.unset
        }
    ]);

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

        navigate("/");
    }

    return (
        <Container className="task-container">
            <div className="task-instruction">
                <h1>Task 1 (Control)</h1>
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