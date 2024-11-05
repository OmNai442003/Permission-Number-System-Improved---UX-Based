import React from "react"
import PropTypes from "prop-types"
import Task2_Experiment_Droppable from "./Task2_Experiement_Droppable";
import { DragDropContext } from "@hello-pangea/dnd";

function Task2_Experiment_OrderableList(props) {

    return (
        <DragDropContext
            onDragEnd={props.onDragEnd}
        >
            <Task2_Experiment_Droppable 
                courses={props.courses}
            />
            
        </DragDropContext>
    )
}

Task2_Experiment_OrderableList.propTypes = {
    courses: PropTypes.array.isRequired,
    onDragEnd: PropTypes.func.isRequired,
}

export default Task2_Experiment_OrderableList