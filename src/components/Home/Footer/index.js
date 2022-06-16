import React, { useState } from 'react'

function Footer({ task, setTask, setHide }) {

    const unCompleted = task.filter((check) => check.status === false);

    const [selected, setSelected] = useState("selected", "", "");

    const clearCompleted = (e) => {
        setTask(task.filter((task) => task.status === false));
    };

    
    const selectedButton = (e) => {
        switch (e.target.id) {
            case "All":
                setSelected(["selected", "", ""]);
                setHide("All");
                break;
            case "Active":
                setSelected(["", "selected", ""]);
                setHide("Active");
                break;
            case "Completed":
                setSelected(["", "", "selected"]);
                setHide("Completed");
                break;
            default:
        }
    }
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{unCompleted.length}</strong>
                {unCompleted.length > 1 ? " items left" : " item left"}
            </span>
            <ul className="filters">
                <li>
                    <a href="/#" className={selected[0]} id="All" onClick={selectedButton}>All</a>
                </li>
                <li>
                    <a href="/#" className={selected[1]} id="Active" onClick={selectedButton}>Active</a>
                </li>
                <li>
                    <a href="/#" className={selected[2]} id="Completed" onClick={selectedButton}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>

    )
}

export default Footer