import { useState } from "react";
import Task1_Experiment_Course from "../../components/Task1/Task1_Experiment_Course";
import { TASK1 } from "../../utility/task1Const";

function Task1Page_Experiment() {
    const [stuff, updateStuff] = useState([
        {
            id: 1,
            name: "Class A",
            description: "A class on the topic of 'A'.",
            sections:[
                {
                    id:1,
                    isEnabled: true,
                    isSelected: false,
                    lecture:{
                        days: ['M', 'W', 'F'],
                        startHour: 11,
                        startMinute: 0,
                        endHour: 11,
                        endMinute: 50,
                    }
                }
            ],
        },
        {
            id: 2,
            name: "Class B",
            description: "A class on the topic of 'B'.",
            sections:[
                {
                    id: 1,
                    isEnabled: true,
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
                    isEnabled: true,
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
        },
        {
            id: 3,
            name: "Class C",
            description: "A class on the topic of 'C'.",
            sections: [
                {
                    id: 1,
                    isEnabled: true,
                    isSelected: false,
                    lecture: {
                        days: ['W'],
                        startHour: 14,
                        startMinute: 0,
                        endHour: 16,
                        endMinute: 30,
                    }
                }
            ],            
        }
    ]);

    function handleUpdateSection(courseId, section) {
        console.log("handleUpdateSection", courseId, section);
        let temp = stuff.map(
            c => 
                ({
                    ...c,
                    sections: c.sections.map(
                        s => 
                        (c.id === courseId && s.id === section.id) ?
                        ({
                            ...section, 
                            isSelected: !section.isSelected
                        }) : (s)
                        )
                })
        );
        
        updateStuff(setSectionInteract(temp));
    }

    function setSectionInteract(courses){
        // Get selected sections
        let sections = [];
        courses.forEach(
            c => c.sections.forEach(
                s => 
                    (s.isSelected)?
                    (sections.push({
                        ...s,
                        courseId: c.id
                        })
                    ):(s)
            )
        );

        // Check all sections for overlap w/ selected
        let temp = courses.map(
            c =>
                ({
                    ...c,
                    sections: c.sections.map(
                        s =>
                        ({
                            ...s,
                            isEnabled: !sectionsOverlap(sections, {...s, courseId: c.id})
                        })
                    )
                })  
        );

        return temp;
    }

    function sectionsOverlap(selectedList, section){
        console.log("sectionsOverlap", selectedList, section);
        // Does section occur during any of the items in selectedList?
        for(let i =0; i < selectedList.length; i++){
            // Stop if this section is one of the selectedList sections
            if(selectedList[i].courseId === section.courseId) return false;


            // Check lecture
            if('lecture' in selectedList[i]){
                if('lecture' in section){
                    if(hasTimeOverlap(selectedList[i].lecture, section.lecture)) return true;
                }

                if('lab' in section){
                    if(hasTimeOverlap(selectedList[i].lecture, section.lab)) return true;
                }

            }

            //Check lab
            if('lab' in selectedList[i]){
                if('lecture' in section){
                    if(hasTimeOverlap(selectedList[i].lab, section.lecture)) return true;
                }

                if('lab' in section){
                    if(hasTimeOverlap(selectedList[i].lab, section.lab)) return true;
                }
            }
        }

        return false;
    }

    function hasTimeOverlap(itemA, itemB){
        
        if (!hasDayOverlap(itemA, itemB)) return false;

        let startA = itemA.startHour * 100 + itemA.startMinute;
        let endA = itemA.endHour * 100 + itemA.endMinute;
        let startB = itemB.startHour * 100 + itemB.startMinute;
        let endB = itemB.endHour * 100 + itemB.endMinute;

        console.log("itemA start/end", itemA.days, startA, endA);
        console.log("itemB start/end", itemB.days, startB, endB);

        if (startA < startB){
            if(startB < endA) return true;
        }
        else if (startA < endB) {
            return true;
        }
        else return false;
        
    }

    function hasDayOverlap(itemA, itemB){
        console.log("hasDayOverlap?")
        for(var i = 0; i < itemA.days.length; i++){
            for(var j = 0; j < itemB.days.length; j++){
                if(itemA.days[i] === itemB.days[j]) return true;
            }
        }
        console.log("hasDayOverlap false");
        return false;
    }

    function print(e) {
        e.preventDefault();
        console.log(stuff);

    }
    function renderRow(course){
        return (
            <>
            <hr/>
            <Task1_Experiment_Course
                course={course}
                handleUpdateSection={handleUpdateSection}
            />
            </>
        );
    };

    return (
        <>
            <h1>Task 1 (Experiment)</h1>
            <p>For each course you are trying to sign up for, please answer the one or two questions about that course.  If you don't plan to take a particular course, just leave the question(s) about it unanswered.</p>

            {stuff.map(renderRow)}

            <br />
            <br />
            <button onClick={print}>Debug to Console</button>

        </>
    )
}

export default Task1Page_Experiment