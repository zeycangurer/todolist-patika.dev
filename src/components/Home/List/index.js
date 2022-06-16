import React from 'react'

function List({ setTask, task, hide }) {

    const handleDeleteTask = (e) => {
        setTask(
            task.filter((task) => parseInt(task.id) !== parseInt(e.target.id))
        )

    }

    const isCompleted = (e) => {
        if (e.status === true && hide === "All") {
            return "completed";
        } else if (e.status === true && hide === "Active") {
            return "completed hidden";
        } else if (e.status === false && hide === "Completed") {
            return "hidden";
        }
    };

    const checkedTask = (e) => {
        let newTask = task.map((task) => {
            if (parseInt(task.id) === parseInt(e.target.id)) {
                return { ...task, status: !task.status };
            }
            return task;
        });
        setTask(newTask);
    }
    return (

        <section className="main">
            <ul className="todo-list">
                {task.map((task) => (
                    <li key={task.id} id={task.id} className={isCompleted(task)} >
                        <div className="view">
                            <input className="toggle"
                                type="checkbox"
                                id={task.id}
                                onClick={checkedTask}
                            />
                            <label >{task.taskName}</label>
                            <button id={task.id} className="destroy" onClick={handleDeleteTask} />
                        </div>
                    </li>
                ))}
            </ul>

        </section>

    )
}

export default List