
import React from "react";
import PropTypes from "prop-types";
import { TASK1 } from "../../utility/task1Const";

function Task1_Experiment_Course(props) {
    
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
                <li className={(section.isEnabled)?(""):("disabled")}>
                    <input 
                        type="checkbox" 
                        checked={!!section.isSelected} 
                        onChange={() => props.handleUpdateSection(courseId, section)}
                        disabled={!section.isEnabled}
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
                <p>Select the lecture/lab time that you wish to enroll in:</p>
                {renderSelectableSchedule(props.course.id, props.course.sections)}
            </div>
        </>
    );
}

Task1_Experiment_Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleUpdateSection: PropTypes.func.isRequired
}

export default Task1_Experiment_Course