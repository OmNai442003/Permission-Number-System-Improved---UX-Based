
import React from "react";
import PropTypes from "prop-types";
import { TASK1 } from "../../utility/task1Const";

function Task1_Control_NoSchedule(props) {
    function getInitialState(){
        return {
            selectedPriorityOption: ""
        };
    }

    function formatDays(days){
        return days.join("");
    };

    function formatTime(hour, minute, isMilitary=false){
        
        return `${(!isMilitary && hour > 12)?(hour-12):(hour)}:${(minute < 10)?("0"):("")}${minute}${(!isMilitary)?((hour >= 12)?(" PM"):(" AM")):("")}`

    }

    function renderScheduleRow(section){
        return (
            <>
                {
                    ('lecture' in section) ?
                        (`Lect ${formatDays(section.lecture.days)} ${formatTime(section.lecture.startHour, section.lecture.startMinute)} - ${formatTime(section.lecture.endHour, section.lecture.endMinute)}`)
                        :("")
                }

{
                    ('lab' in section) ?
                        (`, Lab ${formatDays(section.lab.days)} ${formatTime(section.lab.startHour, section.lab.startMinute)} - ${formatTime(section.lab.endHour, section.lab.endMinute)}`)
                        :("")
                }
            </>
        );
    }

    function renderSelectableSchedule(courseId, sections) {
        return sections.map(section => (
            <ul>
                <li>
                    <input 
                        type="checkbox" 
                        checked={!!section.isSelected} 
                        onChange={() => props.handleUpdateSection(courseId, section.id)}
                    />
                    {renderScheduleRow(section)}
                </li>
            </ul>
        ));
    }

    return (
        <>
            <div className="task1 control no-schedule" key={props.course.id}>

                <p>{props.course.name}</p>
                <p>{props.course.description}</p>
                {
                    (props.course.sections.length == 1) ? (
                        <>
                            <p>{renderScheduleRow(props.course.sections[0])}</p>
                        </>):(
                        <>
                            <p>Select the lecture/lab time that you wish to enroll in:</p>
                            {renderSelectableSchedule(props.course.id, props.course.sections)}
                        </>
                        )
                }
                <label>
                    <input 
                        type="radio" 
                        value="high"
                        checked={props.course.priority == TASK1.control.corePriority.high}
                        onClick={() => props.handleUpdatePriority(props.course.id, (props.course.priority == TASK1.control.corePriority.high)?(TASK1.control.corePriority.unset):(TASK1.control.corePriority.high))}/> I need to take this class. If I'm allowed to register, I will definitely take it.
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="low"
                        checked={props.course.priority == TASK1.control.corePriority.low}
                        onClick={() => props.handleUpdatePriority(props.course.id, (props.course.priority == TASK1.control.corePriority.low)?(TASK1.control.corePriority.unset):(TASK1.control.corePriority.low))}/> I would like to take this class, but can wait a semester if necessary.
                </label>
            </div>
        </>
    );
}

Task1_Control_NoSchedule.propTypes = {
    course: PropTypes.object.isRequired,
    handleUpdatePriority: PropTypes.func.isRequired,
    handleUpdateSection: PropTypes.func.isRequired
}

export default Task1_Control_NoSchedule