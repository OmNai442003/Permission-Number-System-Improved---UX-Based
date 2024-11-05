
import React from "react";
import PropTypes from "prop-types";
import { TASK2 } from "../../utility/task2Const";

function Task2_Experiment_Course(props) {
   
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
            <li key={section.id}>
                <input 
                    type="checkbox" 
                    checked={!!section.isSelected} 
                    onChange={() => props.handleUpdateSection(courseId, section.id)}
                />
                {renderScheduleRow(section)}
            </li>
        ));
    }

    function renderPreferenceRadioInput(courseId, value){
        return (
                <input 
                    type="radio" 
                    value={value} 
                    checked={props.course.preference === value}
                    onClick={() => props.handleUpdatePreference(courseId, (props.course.preference == value)?(0):(value))} 
                    onChange={(e) => e.preventDefault()}
                    />
        )
    }

    return (
        <>
            <div className="task2 experiment" key={props.course.id}>

                <p>{props.course.name}</p>
                <p>{props.course.description}</p>
                {
                    (props.course.sections.length == 1) ? (
                        <>
                            <p>{renderScheduleRow(props.course.sections[0])}</p>
                        </>):(
                        <>
                            <p>Select the lecture/lab time that you wish to enroll in:</p>
                            <ul>
                                {renderSelectableSchedule(props.course.id, props.course.sections)}
                            </ul>
                        </>
                        )
                }
                <label>
                    <input 
                        type="radio" 
                        value="high"
                        checked={props.course.priority == TASK2.experiment.corePriority.high}
                        onChange={(e) => e.preventDefault()}
                        onClick={() => props.handleUpdatePriority(props.course.id, (props.course.priority == TASK2.experiment.corePriority.high)?(TASK2.experiment.corePriority.unset):(TASK2.experiment.corePriority.high))}
                        /> I need to take this class. If I'm allowed to register, I will definitely take it.
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="low"
                        checked={props.course.priority == TASK2.experiment.corePriority.low}
                        onChange={(e) => e.preventDefault()}
                        onClick={() => props.handleUpdatePriority(props.course.id, (props.course.priority == TASK2.experiment.corePriority.low)?(TASK2.experiment.corePriority.unset):(TASK2.experiment.corePriority.low))}
                        /> I would like to take this class, but can wait a semester if necessary.
                </label>
                
                <br />
                <br />
                
                <p>
                Among all the ELECTIVE courses you wish to take (e.g., CSCI 130, 150, 156, 157, 158, 166, 167, 172, 191T) , input your priority/preference ranking about taking {props.course.name} (Required if you mentioned you "NEED" {props.course.name} above. DO NOT input/repeat the same number among the ELECTIVE courses. You MAY NOT get what you prefer if you input the same number.)
                </p>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 means most preferred course</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 1)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 2)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 3)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 4)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 5)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 6)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 7)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 8)}</td>
                            <td>{renderPreferenceRadioInput(props.course.id, 9)}</td>
                            <td>9 means least preferred course</td>                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}



Task2_Experiment_Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleUpdatePriority: PropTypes.func.isRequired,
    handleUpdateSection: PropTypes.func.isRequired,
    handleUpdatePreference: PropTypes.func.isRequired
}

export default Task2_Experiment_Course