import React, { useEffect, useState, useContext } from 'react';
import Task from '../Task/Task';
import Form from '../Form/Form';
import getTasks from '../../database/database.js';
import { Link } from "react-router-dom";
// import { AuthContextConsumer } from "../../Contexts/authContext"
import  AuthContext from "../../Contexts/authContext-F"

const Main = (props) => {
    const [tasks, setTasks] = useState([]);
    const [flagDetail, setFlagDetail] = useState(false);
    const [editFlag, setEditFlag] = useState(false);
    const [editContent, setEditContent] = useState({});
    const [search, setSearch] = useState("");

    const authContext = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            const newTasks = await getTasks()
            setTasks([...tasks, ...newTasks]);
        }
        fetchData()
    }, [])

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const removeTask = (num) => {
        let UpdTasks = tasks.filter((el) => el.id !== num)
        setTasks(UpdTasks)
    }

    const updateTask = (task) => {
        let updated = tasks.map(el => el.id === task.id ? el = task : el)
        setTasks(updated)
    }

    const detail = () => {
        setFlagDetail(true)
    }

    const maestro = () => {
        setFlagDetail(false)
    }

    const editDet = (item) => {
        setEditContent(item)
        setEditFlag(true)
    }

    const editMast = () => {
        setEditContent("")
        setEditFlag(false)
    }

    const searchTasks = (event) => {
        setSearch(event.target.value)
    }

    const drawTasks = () => {
        if (tasks.length > 0) {
            if (search === "") {
                return tasks.map((item) =>
                    <Task task={item} key={item.id} deleteTask={removeTask} editDet={editDet} updateTask={updateTask} />
                )
            } else {
                return tasks
                    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item) =>
                        <Task task={item} key={item.id} deleteTask={removeTask} editDet={editDet} updateTask={updateTask} />
                    )
            }
        } else {
            return <h4>??Tareas completadas!</h4>
        }
    }

    // -----------------------------------------------RENDER

    if (!flagDetail && !editFlag) {
        return (
            <main>
                <h3>??stas son tus tareas</h3>
                <hr />
                {drawTasks()}
                <div className="searchBox">
                    <button className="newTask" onClick={detail}>Nueva tarea</button>
                    <input onChange={searchTasks} type="text" placeholder="Busca entre tus tareas" />
                </div>
                <hr />
                { !authContext.auth ? <button className="loginBtn"><Link to="/login">Login</Link></button> : <button className="loginBtn" onClick={authContext.toggleAuth}>Logout</button>}
            </main>
        )
    } else if (flagDetail) {
        return (
            <Form addTask={addTask} maestro={maestro} />
        )
    } else if (editFlag) {
        return (
            <Form editMast={editMast} task={editContent} key={editContent.id} updateTask={updateTask} />
        )
    }

}

export default Main;