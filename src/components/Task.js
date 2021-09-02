const Task = ({ task, taskID, removeTask }) => {

    function remove() {
        removeTask(taskID);
    }

    return (
        <div className={"task task" + taskID % 4}>
            <h1 style={{ float: "left" }}>{task.text}</h1>
            <h1 style={{ color: "black", float: "right" }} onClick={remove}>X</h1>
        </div>
    );
}

export default Task;