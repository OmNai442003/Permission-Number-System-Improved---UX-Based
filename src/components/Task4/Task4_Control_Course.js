import React from "react";
import PropTypes from "prop-types";
import { TASK4 } from "../../utility/task4Const";

function Task4_Control_Course(props) {
    
    function formatDays(days) {
        return days.join("");
    };

    function formatTime(hour, minute, isMilitary = false) {
        return `${(!isMilitary && hour > 12) ? (hour - 12) : (hour)}:${(minute < 10) ? ("0") : ("")}${minute}${(!isMilitary) ? ((hour >= 12) ? (" PM") : (" AM")) : ("")}`;
    }

    function renderScheduleRow(section) {
        return (
            <>
                {
                    ('lecture' in section) ?
                        (`Lect ${formatDays(section.lecture.days)} ${formatTime(section.lecture.startHour, section.lecture.startMinute)} - ${formatTime(section.lecture.endHour, section.lecture.endMinute)}`)
                        : ("")
                }

                {
                    ('lab' in section) ?
                        (`, Lab ${formatDays(section.lab.days)} ${formatTime(section.lab.startHour, section.lab.startMinute)} - ${formatTime(section.lab.endHour, section.lab.endMinute)}`)
                        : ("")
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

    function renderPrerequisites() {
        const { prerequisites } = props.course;
        if (prerequisites.length > 0) {
            return (
                <div className="prerequisites">
                    Prerequisites:
                    <ul>
                        {prerequisites.map(prereqId => {
                            const prereqCourse = props.allCourses.find(course => course.id === prereqId);
                            return (
                                prereqCourse && (
                                    <li key={prereqId}>{prereqCourse.name}</li>
                                )
                            );
                        })}
                    </ul>
                </div>
            );
        }
        return null; // No prerequisites to display
    }

    return (
        <div className="course" key={props.course.id}>
            <div className="course-name">{props.course.name}</div>
            <div className="course-desc">{props.course.description}</div>

            {renderPrerequisites()}

            {
                (props.course.sections.length === 1) ? (
                    <p>{renderScheduleRow(props.course.sections[0])}</p>
                ) : (
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
                    checked={props.course.priority === TASK4.control.corePriority.high}
                    onChange={(e) => e.preventDefault()}
                    onClick={() => props.handleUpdatePriority(props.course.id, (props.course.priority === TASK4.control.corePriority.high) ? (TASK4.control.corePriority.unset) : (TASK4.control.corePriority.high))}
                /> I need to take this class. If I'm allowed to register, I will definitely take it.
            </label>
            <label>
                <input 
                    type="radio" 
                    value="low"
                    checked={props.course.priority === TASK4.control.corePriority.low}
                    onChange={(e) => e.preventDefault()}
                    onClick={() => props.handleUpdatePriority(props.course.id, (props.course.priority === TASK4.control.corePriority.low) ? (TASK4.control.corePriority.unset) : (TASK4.control.corePriority.low))}
                /> I would like to take this class, but can wait a semester if necessary.
            </label>
        </div>
    );
}

Task4_Control_Course.propTypes = {
    course: PropTypes.object.isRequired,
    allCourses: PropTypes.array.isRequired, // New prop for all courses
    handleUpdatePriority: PropTypes.func.isRequired,
    handleUpdateSection: PropTypes.func.isRequired
}

export default Task4_Control_Course;
