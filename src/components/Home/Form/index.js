import React, { useEffect, useState } from 'react'

// const initialFormValues = { id: "", taskName: "", state: false }

function Form({ setTask, task }) {

    const [form, setForm] = useState("")


    const onChangeInput = (e) => {
        setForm(e.target.value)
    }

    useEffect(() => {
        setForm("")
    }, [task])

    const onSubmit = (e) => {
        e.preventDefault();
        if (form === "") {
            return false;
        }

        setTask([...task, {taskName:form, status: false, id: Math.random()*1000},])
        setForm("")
    }

    return (
        <>
            <header className='header'>
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input
                        name="taskName"
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus
                        value={form}
                        onChange={onChangeInput} />
                </form>
            </header>
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
        </>
    )
}

export default Form