import React, { useState, useEffect } from 'react'

const Form = (props) => {
    const [newTask, setNewTask] = useState({});
    const [task, setTask] = useState(props.task);

    useEffect(() => {
        console.log(`existo EDITO/CREO ${JSON.stringify(task)} y ${JSON.stringify(newTask)}`);

        return () => { console.log(`me piro EDITO/CREO ${JSON.stringify(task)} y ${JSON.stringify(newTask)}`); }
    }, [])

    useEffect(() => {
        console.log(`renderizo EDITO/CREO ${JSON.stringify(task)} y ${JSON.stringify(newTask)}`);
    }, [task, newTask])

    // ----------------------------------NEW POST

    const handleTask = event => setNewTask({ name: event.target.value, done: "uncheck", pri: "baja", id: Date.now() })

    const handleNewPost = event => {
        event.preventDefault()
        props.addTask(newTask)
        props.maestro()
    }

    // ---------------------------------EDIT POST

    const nameChange = (event) => setTask({ name: event.target.value, done: task.done, pri: task.pri, id: task.id })

    const changeCheck = async () => {
        if (task.done === "uncheck") {
            await setTask({ name: task.name, done: "check", pri: task.pri, id: task.id })
            await props.updateTask({ name: task.name, done: "check", pri: task.pri, id: task.id })
        } else {
            await setTask({ name: task.name, done: "uncheck", pri: task.pri, id: task.id })
            await props.updateTask({ name: task.name, done: "uncheck", pri: task.pri, id: task.id })
        }
    }

    const priorityChange = (event) => setTask({ name: task.name, done: task.done, pri: event.target.value, id: task.id })

    const saveTask = () => {
        props.updateTask(task)
        props.editMast()
    }

    if (props.addTask) {
        return (
            <form>
                <div>
                    <input type="text" placeholder="Nueva tarea" onChange={handleTask} />
                    <button onClick={handleNewPost}>Añadir</button>
                </div>
                <button onClick={props.maestro}>Volver</button>
            </form>
        )
    } else {
        return (
            <>
                <div className="taskBox">
                    <img src={`http://localhost:3000/img/${task.pri}.svg`} alt="" />
                    <input type="text" className="inp" defaultValue={task.name} onChange={nameChange} />
                    <div>
                        <img onClick={changeCheck} src={`http://localhost:3000/img/${task.done}.svg`} alt="" />
                        <button onClick={saveTask}>Guardar</button>

                        <select defaultValue="" onChange={priorityChange}>
                            <option value="" disabled hidden>Prioridad</option>
                            <option value="baja">Baja</option>
                            <option value="alta">Alta</option>
                        </select>
                    </div>
                </div>
                <button onClick={props.editMast}>Volver</button>
            </>
        )
    }

}

export default Form;