import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Form from './Form'
import List from './List'
import './styles.css'

function Home() {
    const [task, setTask] = useState([])
    const [hide, setHide] = useState("All");

    useEffect(() => (
        console.log(task)
    ), [task])
    return (
        <section className='todoapp'>
            <Form setTask={setTask} task={task} />
            <List task={task} setTask={setTask} hide={hide}/>
            <Footer task={task} setTask={setTask} setHide={setHide}/>
        </section>
    )
}

export default Home