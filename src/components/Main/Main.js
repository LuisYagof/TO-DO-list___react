import React from 'react';
// import './Main.css';
import Post from '../Post/Post';
import Form from '../Form/Form';
import getTasks from '../../database/database.js';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }
    }

    async componentDidMount() {
        const newTasks = await getTasks()
        this.setState({ tasks: [...this.state.tasks, ...newTasks] });
    }

    removeTask = (num) => {
        let UpdTasks = this.state.tasks.filter((el, i) => i !== num)
        this.setState({ tasks: UpdTasks })
    }

    updateTask = (num, text) => {
        let removedTasks = this.state.tasks.splice(num, 1, text);
        this.setState({ tasks: this.state.tasks })
    }

    drawTasks = () => {
        if (this.state.tasks.length > 0) {
            return this.state.tasks.map((item, i) =>
                <Post task={item.name} done={item.done} key={i} num={i} deleteTask={this.removeTask} editTask={this.updateTask} pri={item.pri}/>
            )
        } else {
            return <h4>¡Tareas completadas!</h4>
        }
    }

    addTask = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

    render() {
        return (
            <main>
                <h3>Éstas son tus tareas:</h3>
                <hr />
                {this.drawTasks()}
                <Form addTask={this.addTask} />
            </main>
        )
    }
}

export default Main;