import React from "react";
import { useEffect, useState } from "react";
import Task2_Experiment_Course from "../../components/Task2/Task2_Experiment_Course";
import Task2_Experiment_OrderableList from "../../components/Task2/Task2_Experiment_OrderableList";
import { TASK2 } from "../../utility/task2Const";
import Styled from "styled-components";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";

function Task2Page_Experiment() {
    const navigate = useNavigate();
    const Container = Styled.div``;
    const [details, updateDetails] = useState({
        taskName: "Task2_Experiment",
        startDateTime: new Date()
    });
    const [state, setState] = useState({
        isSorting: false
    });
    const [preference, setPreference] = useState([]);
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
            priority: TASK2.experiment.corePriority.unset,
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
            priority: TASK2.experiment.corePriority.unset,
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
            priority: TASK2.experiment.corePriority.unset,
            preference: 0
        }
    ]);

    useEffect(() => {
        setPreference(courses.reduce(function(result, c) {
            if (c.priority !== TASK2.experiment.corePriority.unset){
                return result.concat({
                    id: c.id,
                    name: c.name,
                    description: c.description
                })
            }
            return result;
        }, []));
    }, [courses]);

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

    function handleUpdateSortingState(newState){
        console.log(newState);
        setState({
            ...state,
            isSorting: newState
        });
    }

    function renderRow(course){
        return (
            <Task2_Experiment_Course
                key={course.id}
                course={course}
                handleUpdatePriority={handleUpdatePriority}
                handleUpdateSection={handleUpdateSection}
                handleUpdatePreference={handleUpdatePreference}
            />
        );
    };

    function onDragEnd(result) {
        // console.log(result);
        const { source, destination } = result;

        if (!destination) return;
        if (source.index === destination.index) return;

        
        const newPreference = Array.from(preference);
        let temp = newPreference.splice(source.index, 1);
        newPreference.splice(destination.index, 0, temp[0])
        
        setPreference(newPreference);
    }

    function save(e){
        e.preventDefault();
        let endDateTime = new Date();

        dataRepo.recordTask({
            ...details,
            endDateTime,
            data: courses
        });

        navigate("/");
    }

    return (
        <Container className="task-container">
            <div className="task-instruction">
                            <h1>Task 2B</h1>
                            <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>
                        </div>

                        <hr />
            {
                (!state.isSorting)
                ?(
                    <>
                        

                        {courses.map(renderRow)}

                        <br />
                        <br />
                        <button onClick={() => handleUpdateSortingState(true)}>Next</button>
                    </>
                )
                :(
                    <>
                        <div className="sortable-preference-instructions">
                            The classes you selected are listed below.  Please drag and drop the classes to put them in your preferred order from highest preference on the top to lowest on the bottom.
                        </div>

                        <Task2_Experiment_OrderableList
                            courses={preference}
                            onDragEnd={onDragEnd}
                        />

                        <br />
                        <br />

                        <button onClick={() => handleUpdateSortingState(false)}>Back</button>
                        <br />
                        <br />


                        <button onClick={save}>Save</button>
                    </>
                )
            }
        </Container>
    )
}

export default Task2Page_Experiment