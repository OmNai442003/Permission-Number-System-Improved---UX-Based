import { useState } from "react";
import Task1_Control_Course from "../../components/Task1/Task1_Control_Course";
import { TASK1 } from "../../utility/task1Const";

function Task1Page_Control() {
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

    function print(e) {
        e.preventDefault();
        console.log(stuff);

    }
    function renderRow(course){
        return (
            <>
            <hr/>
            <Task1_Control_Course
                course={course}
                handleUpdatePriority={handleUpdatePriority}
                handleUpdateSection={handleUpdateSection}
            />
            </>
        );
    };

    return (
        <>
            <h1>Task 1 (Control)</h1>
            <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>

            {stuff.map(renderRow)}

            <br />
            <br />
            <button onClick={print}>Debug to Console</button>

        </>
    )
}

export default Task1Page_Control