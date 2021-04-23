import React from 'react';
// import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        if (props.addTask) {
            this.state = {
                task: { name: "" }
            }
        } else {
            this.state = {
                task: props.task
            }
        }
    }

    // ----------------------------------NEW POST

    handleTask = event => this.setState({ task: { name: event.target.value, done: false, pri: "baja", id: Date.now() } })

    handleNewPost = event => {
        event.preventDefault()
        this.props.addTask(this.state.task)
        this.props.maestro()
    }

    // ---------------------------------EDIT POST

    nameChange = (event) => this.setState({ task: { name: event.target.value, done: this.state.task.done, pri: this.state.task.pri, id: this.state.task.id } })

    doneChange = (event) => this.setState({ task: { name: this.state.task.name, done: !this.state.task.done, pri: this.state.task.pri, id: this.state.task.id } })

    priorityChange = (event) => this.setState({ task: { name: this.state.task.name, done: this.state.task.done, pri: event.target.value, id: this.state.task.id } })

    saveTask = () => {
        this.props.updateTask(this.state.task)
        this.props.editMast()
    }


    render() {
        if (this.props.addTask) {
            return (
                <form>
                    <div>
                        <input type="text" placeholder="Nueva tarea" onChange={this.handleTask} />
                        <button onClick={this.handleNewPost}>Añadir</button>
                    </div>
                    <button onClick={this.props.maestro}>Volver</button>
                </form>
            )
        } else {
            return (
                <>
                    <div className="taskBox">
                        <img src={`http://localhost:3000/img/${this.state.task.pri}.svg`} alt="" />
                        <input type="text" className="inp" value={this.state.task.name} onChange={this.nameChange} />
                        <div>
                            <input type="checkbox" className="chk" onClick={this.doneChange} />
                            <button onClick={this.saveTask}>Guardar</button>

                            <select onChange={this.priorityChange}>
                                <option value="" selected disabled hidden>Prioridad</option>
                                <option value="baja">Baja</option>
                                <option value="alta">Alta</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={this.props.editMast}>Volver</button>
                </>
            )
        }
    }
}

export default Form;