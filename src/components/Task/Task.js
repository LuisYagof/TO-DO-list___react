import React from 'react';
import { useEffect, useState } from 'react';

const Task = (props) => {
    const [task, setTask] = useState(props.task);

    useEffect(() => {
        console.log(`existo SOY ${task.name}`);
        return () => { console.log(`me piro SOY ${task.name}`); }
    }, [])

    useEffect(() => {
        console.log(`renderizo SOY ${task.name}`);
    }, [props.task])

    // const doneChange = async () => {
    //     await setTask({ name: task.name, done: !task.done, pri: task.pri, id: task.id })

    //     await props.updateTask({ name: task.name, done: !task.done, pri: task.pri, id: task.id })
    // }

    const changeCheck = async () => {
        if (task.done === "uncheck") {
            await setTask({ name: task.name, done: "check", pri: task.pri, id: task.id })
            await props.updateTask({ name: task.name, done: "check", pri: task.pri, id: task.id })
        } else {
            await setTask({ name: task.name, done: "uncheck", pri: task.pri, id: task.id })
            await props.updateTask({ name: task.name, done: "uncheck", pri: task.pri, id: task.id })
        }
    }

    const priorityChange = async (event) => {
        await setTask({ name: task.name, done: task.done, pri: event.target.value, id: task.id })

        await props.updateTask({ name: task.name, done: task.done, pri: event.target.value, id: task.id })
    }

    return (
        <>
            <div className="taskBox">
                <img src={`http://localhost:3000/img/${task.pri}.svg`} alt="" />
                <h5 className={`${task.done}`}>{props.task.name}</h5>
                <div>
                    <img onClick={changeCheck} src={`http://localhost:3000/img/${task.done}.svg`} alt="" />
                    {/* <input type="checkbox" className="chk" onClick={doneChange} /> */}
                    <button onClick={() => props.editDet(task)}>Editar</button>
                    <button onClick={() => props.deleteTask(props.task.id)}>Borrar</button>
                    <select defaultValue="" onChange={priorityChange}>
                        <option value="" disabled hidden>Prioridad</option>
                        <option value="baja">Baja</option>
                        <option value="alta">Alta</option>
                    </select>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Task;