import { useState , useEffect } from "react";
import Task4_Experiment_Course from "../../components/Task4/Task4_Experiment_Course";
import { TASK4 } from "../../utility/task4Const";
import Styled from "styled-components";
import coursesData from "../../assets/json/courses.json"
import userData from "../../assets/json/data.json";


function Task4Page_Experiment() {
    const Container = Styled.div``;
    const [course, updateCourse] = useState([]);
    const [user, setUser] = useState(null); // State to hold user data


    useEffect(() => {

        const fetchedUserData = userData[0]; // Assuming user data is an array
        setUser(fetchedUserData);

        // Map through the imported courses and set the priority
        const updatedCourses = coursesData.map(item => ({
            ...item,
            priority: TASK4.experiment.corePriority.unset // Set the initial priority to unset
        }));
        updateCourse(updatedCourses);
    }, []);

    function hasCompletedPrerequisites(course) {
        if (!user || !user.completedCourses) return false;

        const prerequisiteIds = course.prerequisites || []; // Assuming the course has a preRequisites field
        return prerequisiteIds.every(prereqId =>
            user.completedCourses.some(completed => completed.id === prereqId)
        );
    }

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
        const prerequisitesMet = hasCompletedPrerequisites(course);
        const isDisabled = !prerequisitesMet; // Determine if course should be disabled

        return (
            <Task4_Experiment_Course
                key={course.id}
                course={course}
                allCourses={coursesData}
                isDisabled={isDisabled}
                handleUpdatePriority={handleUpdatePriority}
                handleUpdateSection={handleUpdateSection}
            />
        );
    };

    return (
        <Container className="task-container">
            <div className="task-instruction">
                <h1>Task 4 (Experiment)</h1>
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

export default Task4Page_Experiment