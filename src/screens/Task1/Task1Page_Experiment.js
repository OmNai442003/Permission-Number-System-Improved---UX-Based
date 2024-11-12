import { useState } from "react";
import Task1_Experiment_Course from "../../components/Task1/Task1_Experiment_Course";
import { TASK1 } from "../../utility/task1Const";
import Styled from "styled-components";
import * as dataRepo from "../../utility/dataRepo";
import { useNavigate } from "react-router-dom";
import courseData from "../../assets/json/task1ExperimentData.json"

function Task1Page_Experiment() {
    const navigate = useNavigate();
    const Container = Styled.div``;
    const [details, updateDetails] = useState({
        taskName: "Task1_Experiment",
        startDateTime: new Date()
    });    

    const [stuff, updateStuff] = useState(courseData);

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
        // console.log("sectionsOverlap", selectedList, section);
        // Does section occur during any of the items in selectedList?
        for(let i =0; i < selectedList.length; i++){
            // console.log("sectionsOverlapTesting", selectedList[i].courseId)
            // Stop if this section is one of the selectedList sections
            if(selectedList[i].courseId === section.courseId) {
                if (selectedList[i].id === section.id) return false;
                return true;
            }


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

        // console.log("itemA start/end", itemA.days, startA, endA);
        // console.log("itemB start/end", itemB.days, startB, endB);

        if (startA < startB){
            if(startB < endA) return true;
        }
        else if (startA < endB) {
            return true;
        }
        else return false;
        
    }

    function hasDayOverlap(itemA, itemB){
        // console.log("hasDayOverlap?")
        for(var i = 0; i < itemA.days.length; i++){
            for(var j = 0; j < itemB.days.length; j++){
                if(itemA.days[i] === itemB.days[j]) return true;
            }
        }
        // console.log("hasDayOverlap false");
        return false;
    }

    function renderRow(course){
        return (
            <Task1_Experiment_Course
                key={course.id}
                course={course}
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
                <h1>Task 1B</h1>
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

export default Task1Page_Experiment