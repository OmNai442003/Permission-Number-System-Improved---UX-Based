import { useState } from "react";
import Task2_Control_Course from "../../components/Task2/Task2_Control_Course";
import { TASK2 } from "../../utility/task2Const";
import Styled from "styled-components";

function Task2Page_Control() {
    const Container = Styled.div``;
    const [courses, updateCourses] = useState([
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
            priority: TASK2.control.corePriority.unset,
            preference: 0
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
            priority: TASK2.control.corePriority.unset,
            preference: 0
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
            priority: TASK2.control.corePriority.unset,
            preference: 0
        }
    ]);

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

    function print(e) {
        e.preventDefault();
        console.log(courses);

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

    return (
        <Container className="task-container">
            <div className="task-instruction">
                <h1>Task 2 (Control)</h1>
                <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>
            </div>

            <hr />

            {courses.map(renderRow)}

            <br />
            <br />
            <button onClick={print}>Debug to Console</button>

        </Container>
    )
}

export default Task2Page_Control