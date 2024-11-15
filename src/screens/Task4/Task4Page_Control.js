import { useState, useEffect } from "react";
import Task4_Control_Course from "../../components/Task4/Task4_Control_Course";
import { TASK4 } from "../../utility/task4Const";
import styled from "styled-components";
import coursesData from "../../assets/json/courses.json";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
`;

const Header = styled.h1`
    font-size: 2em;
    color: #333;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background-color: #0056b3;
    }
`;

function Task4Page_Control() {
   
    const navigate = useNavigate();
    const [course, updateCourse] = useState([]);
    const [details, updateDetails] = useState({
        taskName: "Task4_Control",
        startDateTime: new Date()
    });

    useEffect(() => {
        // Map through the imported courses and set the priority
        const updatedCourses = coursesData.map(item => ({
            ...item,
            priority: TASK4.control.corePriority.unset // Set the initial priority to unset
        }));
        updateCourse(updatedCourses);
    }, []);

    function handleUpdatePriority(id, value) {
        updateCourse(
            course.map(item =>
                (item.id === id) ? ({...item, priority: value}) : (item)
            )
        )
    }

    function handleUpdateSection(courseId, sectionId) {
        updateCourse(
            course.map(item =>
                (item.id === courseId) ? ({
                    ...item,
                    sections: item.sections.map(sec =>
                        (sec.id === sectionId) ? ({ ...sec, isSelected: !sec.isSelected }) : sec
                    )
                }) : item
            )
        )
    }

    function print(e) {
        e.preventDefault();
        console.log(course);
    }

    function save(e){
        e.preventDefault();
        let endDateTime = new Date();

        dataRepo.recordTask({
            ...details,
            endDateTime,
            data: course
        });

        navigate("/");
    }

    return (
        <Container>
            <Header>Task 4 (Control)</Header>
            <p>For each course you are trying to sign up for, please answer the one or two questions about that course. If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>
            <hr />
            {course.map(item => (
                <Task4_Control_Course
                    key={item.id}
                    course={item}
                    allCourses={coursesData}
                    handleUpdatePriority={handleUpdatePriority}
                    handleUpdateSection={handleUpdateSection}
                />
            ))}
            <Button onClick={save}>Save</Button>
        </Container>
    );
}

export default Task4Page_Control;
