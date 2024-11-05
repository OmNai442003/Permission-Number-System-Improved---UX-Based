import React from "react";
import PropTypes from "prop-types";
import {Droppable, Draggable} from "@hello-pangea/dnd"
import styled from "styled-components";

function Task2_Experiment_Droppable(props){
    const CourseList = styled.div``;
    const DragContainer = styled.div``;

    function renderCourse(course, index){
        return (

                <Draggable
                    key={course.id}
                    draggableId={`${course.id}`}
                    index={index}>
                        {(provided) => (
                            <DragContainer
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                            >
                                {course.name} {course.description}
                            </DragContainer>
                        )}
                    
                </Draggable>
        );
    }

    return (
        <Droppable 
            droppableId="123456"
        >
            {provided => (
                    <CourseList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.courses.map(renderCourse)}
                        {provided.placeholder}
                    </CourseList>
                )}
        </Droppable>
    )
}

Task2_Experiment_Droppable.propTypes = {
    courses: PropTypes.array,
}

export default Task2_Experiment_Droppable