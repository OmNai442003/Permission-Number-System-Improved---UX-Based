import React from "react";
import { useEffect, useState } from "react";
import Task2_Experiment_Course from "../../components/Task2/Task2_Experiment_Course";
import Task2_Experiment_OrderableList from "../../components/Task2/Task2_Experiment_OrderableList";
import { TASK2 } from "../../utility/task2Const";

function Task2Page_Experiment() {
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

    function print(e) {
        e.preventDefault();
        console.log(preference);
        console.log(courses);

    }

    function renderRow(course){
        return (
            <React.Fragment key={course.id}>
            <hr/>
            <Task2_Experiment_Course
                course={course}
                handleUpdatePriority={handleUpdatePriority}
                handleUpdateSection={handleUpdateSection}
                handleUpdatePreference={handleUpdatePreference}
            />
            </React.Fragment>
        );
    };

    function onDragEnd(result) {
        console.log(result);
        const { source, destination } = result;

        if (!destination) return;
        if (source.index === destination.index) return;

        
        const newPreference = Array.from(preference);
        let temp = newPreference.splice(source.index, 1);
        newPreference.splice(destination.index, 0, temp[0])
        
        setPreference(newPreference);
    }

    return (
        <>
            <h1>Task 2 (Experiment)</h1>
            <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>

            {courses.map(renderRow)}

            <br />
            <br />

            <Task2_Experiment_OrderableList
                courses={preference}
                onDragEnd={onDragEnd}
                />

            <br />
            <br />
            <button onClick={print}>Debug to Console</button>

        </>
    )
}

export default Task2Page_Experiment