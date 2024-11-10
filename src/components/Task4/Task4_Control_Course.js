import React, { useState } from "react";
import PropTypes from "prop-types";
import { TASK4 } from "../../utility/task4Const";
import styled from "styled-components";

const CourseContainer = styled.div`
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

const CourseHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const CourseDetails = styled.div`
    margin-top: 10px;
    cursor: default;
`;

const CourseName = styled.h2`
    font-size: 1.4em;
    color: #333;
    margin: 0;
`;

const ToggleButton = styled.button`
    font-size: 1.2em;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
`;

const SectionList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
`;

const SectionItem = styled.li`
    margin-bottom: 8px;
`;

const Checkbox = styled.input`
    margin-right: 8px;
`;

const RadioLabel = styled.label`
    display: block;
    margin-top: 10px;
`;

function Task4_Control_Course(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        setIsExpanded((prev) => !prev);
    }

    function formatDays(days) {
        return days.join("");
    }

    function formatTime(hour, minute, isMilitary = false) {
        return `${(!isMilitary && hour > 12) ? (hour - 12) : (hour)}:${(minute < 10 ? "0" : "")}${minute}${!isMilitary ? (hour >= 12 ? " PM" : " AM") : ""}`;
    }

    function renderScheduleRow(section) {
        return (
            <>
                {('lecture' in section) ? `Lect ${formatDays(section.lecture.days)} ${formatTime(section.lecture.startHour, section.lecture.startMinute)} - ${formatTime(section.lecture.endHour, section.lecture.endMinute)}` : ""}
                {('lab' in section) ? `, Lab ${formatDays(section.lab.days)} ${formatTime(section.lab.startHour, section.lab.startMinute)} - ${formatTime(section.lab.endHour, section.lab.endMinute)}` : ""}
            </>
        );
    }

    function renderSelectableSchedule(courseId, sections) {
        return (
            <SectionList>
                {sections.map(section => (
                    <SectionItem key={section.id}>
                        <Checkbox
                            type="checkbox"
                            checked={!!section.isSelected}
                            onChange={() => props.handleUpdateSection(courseId, section.id)}
                            onClick={(e) => {e.stopPropagation(); }}
                        />
                        {renderScheduleRow(section)}
                    </SectionItem>
                ))}
            </SectionList>
        );
    }

    return (
        <CourseContainer>
            <CourseHeader onClick={toggleExpand}>
                <CourseName>{props.course.name}</CourseName>
                <ToggleButton onClick={(e) => { e.stopPropagation(); toggleExpand(); }}>
                    {isExpanded ? "-" : "+"}
                </ToggleButton>
            </CourseHeader>
            {isExpanded && (
                <CourseDetails>
                    <p>{props.course.description}</p>

                    {props.course.prerequisites.length > 0 && (
                        <div>
                            <strong>Prerequisites:</strong>
                            <ul>
                                {props.course.prerequisites.map(prereqId => {
                                    const prereqCourse = props.allCourses.find(course => course.id === prereqId);
                                    return prereqCourse && <li key={prereqId}>{prereqCourse.name}</li>;
                                })}
                            </ul>
                        </div>
                    )}

                    {props.course.sections.length === 1 ? (
                        <p>{renderScheduleRow(props.course.sections[0])}</p>
                    ) : (
                        <>
                            <p>Select the lecture/lab time that you wish to enroll in:</p>
                            {renderSelectableSchedule(props.course.id, props.course.sections)}
                        </>
                    )}

                    <RadioLabel>
                        <input
                            type="radio"
                            value="high"
                            checked={props.course.priority === TASK4.control.corePriority.high}
                            onClick ={(e) =>{e.stopPropagation();  props.handleUpdatePriority(props.course.id, props.course.priority === TASK4.control.corePriority.high ? TASK4.control.corePriority.unset : TASK4.control.corePriority.high)}}
                        /> I need to take this class. If I'm allowed to register, I will definitely take it.
                    </RadioLabel>
                    <RadioLabel>
                        <input
                            type="radio"
                            value="low"
                            checked={props.course.priority === TASK4.control.corePriority.low}
                            onClick={(e) =>{e.stopPropagation();  props.handleUpdatePriority(props.course.id, props.course.priority === TASK4.control.corePriority.low ? TASK4.control.corePriority.unset : TASK4.control.corePriority.low)}}
                        /> I would like to take this class, but can wait a semester if necessary.
                    </RadioLabel>
                </CourseDetails>
            )}
        </CourseContainer>
    );
}

Task4_Control_Course.propTypes = {
    course: PropTypes.object.isRequired,
    allCourses: PropTypes.array.isRequired,
    handleUpdatePriority: PropTypes.func.isRequired,
    handleUpdateSection: PropTypes.func.isRequired
};

export default Task4_Control_Course;
