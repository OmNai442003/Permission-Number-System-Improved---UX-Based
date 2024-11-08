import { useState , useEffect } from "react";
import Task4_Control_Course from "../../components/Task4/Task4_Control_Course";
import { TASK4 } from "../../utility/task4Const";
import Styled from "styled-components";
import coursesData from "../../assets/json/courses.json"

function Task4Page_Control() {
    const Container = Styled.div``;
    const [course, updateCourse] = useState([]);

    useEffect(() => {
        // Map through the imported courses and set the priority
        const updatedCourses = coursesData.map(item => ({
            ...item,
            priority: TASK4.control.corePriority.unset // Set the initial priority to unset
        }));
        updateCourse(updatedCourses);
    }, []);

    function handleUpdatePriority(id, value) {
        // console.log("handleUpdatePriority",id, value);
        updateCourse(
            course.map(item =>
                (item.id == id) ? ({...item, priority: value}) : (item)
            )

        )
    }

    function handleUpdateSection(courseId, sectionId, value) {
        // console.log("handleUpdateSection", courseId, sectionId, value);
        updateCourse(
            course.map(
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
        console.log(course);

    }
    function renderRow(course){
        return (
            <Task4_Control_Course
                key={course.id}
                course={course}
                allCourses={coursesData}
                handleUpdatePriority={handleUpdatePriority}
                handleUpdateSection={handleUpdateSection}
            />
        );
    };

    return (
        <Container className="task-container">
            <div className="task-instruction">
                <h1>Task 4 (Control)</h1>
                <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>
            </div>

            <hr />

            {course.map(renderRow)}

            <br />
            <br />
            <button onClick={print}>Debug to Console</button>

        </Container>
    )
}

export default Task4Page_Control