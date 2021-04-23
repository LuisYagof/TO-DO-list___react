import React from 'react';
// import './Main.css';
import Post from '../Post/Post';
import Form from '../Form/Form';
import getTasks from '../../database/database.js';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            createTaskDetail: false,
            editTaskDetail: false,
            editContent: {},
            filter: ""
        }
    }

    async componentDidMount() {
        const newTasks = await getTasks()
        this.setState({ tasks: [...this.state.tasks, ...newTasks] });
    }

    removeTask = (num) => {
        let UpdTasks = this.state.tasks.filter((el) => el.id !== num)
        this.setState({ tasks: UpdTasks })
    }

    updateTask = (task) => {
        let updated = this.state.tasks.map(el => el.id == task.id ? el = task : el)
        this.setState({ tasks: updated })
    }

    drawTasks = () => {
        if (this.state.tasks.length > 0) {
            if (this.state.filter === "") {
                return this.state.tasks.map((item) =>
                    <Post task={item} key={item.id} deleteTask={this.removeTask} editDet={this.editDet} updateTask={this.updateTask} />
                )
            } else {
                return this.state.tasks
                    .filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
                    .map((item) =>
                        <Post task={item} key={item.id} deleteTask={this.removeTask} editDet={this.editDet} updateTask={this.updateTask} />
                    )
            }
        } else {
            return <h4>¡Tareas completadas!</h4>
        }
    }

    addTask = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

    detail = (event) => {
        this.setState({ createTaskDetail: true })
    }

    maestro = (event) => {
        this.setState({ createTaskDetail: false })
    }

    editDet = (item) => {
        this.setState({ editContent: item })
        this.setState({ editTaskDetail: true })
    }

    editMast = (event) => {
        this.setState({ editContent: "" })
        this.setState({ editTaskDetail: false })
    }

    filterTasks = (event) => {
        this.setState({ filter: event.target.value })
    }

    render() {
        if (!this.state.createTaskDetail && !this.state.editTaskDetail) {
            return (
                <main>
                    <h3>Éstas son tus tareas:</h3>
                    <hr />
                    {this.drawTasks()}
                    <div className="searchBox">
                        <button className="newTask" onClick={this.detail}>Nueva tarea</button>
                        <input onChange={this.filterTasks} type="text" placeholder="Busca entre tus tareas" />
                    </div>
                </main>
            )
        } else if (this.state.createTaskDetail) {
            return (
                <Form addTask={this.addTask} maestro={this.maestro} />
            )
        } else if (this.state.editTaskDetail) {
            return (
                <Form editMast={this.editMast} task={this.state.editContent} key={this.state.editContent.id} updateTask={this.updateTask} />
            )
        }
    }
}

export default Main;