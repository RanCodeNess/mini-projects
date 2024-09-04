import propTypes from 'prop-types';

function Task(props) {
    return (
        <div className="task">
            <p>{props.id+1}-{props.task}</p>
            <div className="up" onClick={() => props.swapArrayElements(props.setTodos,props.id,props.id - 1)}>👆</div>
            <div className="down" onClick={() => props.swapArrayElements(props.setTodos,props.id,props.id + 1)}>👇</div>
            <div className="delete" onClick={() => props.handleDelete(props.setTodos,props.id)}>delete</div>
        </div>
    );
}

Task.propTypes = {
    task: propTypes.string.isRequired,
    swapArrayElements: propTypes.func.isRequired, // Ensure swapArrayElements is a function
    handleDelete: propTypes.func.isRequired, // Ensure handleDelete is a function
    id: propTypes.number.isRequired // Ensure id is a number
};

export default Task


