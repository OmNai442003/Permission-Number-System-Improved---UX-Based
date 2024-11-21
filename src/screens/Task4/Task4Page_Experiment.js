import { useState, useEffect } from "react";
import Task4_Experiment_Course from "../../components/Task4/Task4_Experiment_Course";
import { TASK4 } from "../../utility/task4Const";
import styled from "styled-components";
import coursesData from "../../assets/json/courses.json";
import userData from "../../assets/json/data.json";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

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

function Task4Page_Experiment() {
    const location = useLocation();
    const { userInfo } = location.state;
    const navigate = useNavigate();
    const [details, updateDetails] = useState({
        taskName: "Task4_Experiment",
        startDateTime: new Date()
    });

    const [course, updateCourse] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchedUserData = userData[0];
        setUser(fetchedUserData);

        const updatedCourses = coursesData.map(item => ({
            ...item,
            priority: TASK4.experiment.corePriority.unset
        }));
        updateCourse(updatedCourses);
    }, []);

    function hasCompletedPrerequisites(course) {
        if (!user || !user.completedCourses) return false;
        const prerequisiteIds = course.prerequisites || [];
        return prerequisiteIds.every(prereqId =>
            user.completedCourses.some(completed => completed.id === prereqId)
        );
    }

    function handleUpdatePriority(id, value) {
        updateCourse(
            course.map(item =>
                item.id === id ? { ...item, priority: value } : item
            )
        );
    }

    function handleUpdateSection(courseId, sectionId) {
        updateCourse(
            course.map(item =>
                item.id === courseId
                    ? {
                          ...item,
                          sections: item.sections.map(sec =>
                              sec.id === sectionId
                                  ? { ...sec, isSelected: !sec.isSelected }
                                  : sec
                          )
                      }
                    : item
            )
        );
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

        navigate("/landing", { state: { userId: userInfo.id } });
    }

    return (
        <Container>
            <Header>Task 4 (Experiment)</Header>
            <p>
                For each course you are trying to sign up for, please answer the
                one or two questions about that course. If you don't plan to take a
                particular course, just leave the question(s) about it unanswered.
            </p>
            <hr />
            {course.map(item => (
                <Task4_Experiment_Course
                    key={item.id}
                    course={item}
                    allCourses={coursesData}
                    isDisabled={!hasCompletedPrerequisites(item)}
                    handleUpdatePriority={handleUpdatePriority}
                    handleUpdateSection={handleUpdateSection}
                />
            ))}
            <Button onClick={save}>Save</Button>
        </Container>
    );
}

export default Task4Page_Experiment;
