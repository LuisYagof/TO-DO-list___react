import React from 'react';
// import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: { name: "" }
        }
    }

    handleTask = event => this.setState({ task: { name: event.target.value, done: false, pri: "baja" } })

    handleNewPost = event => {
        event.preventDefault()
        this.props.addTask(this.state.task)
        this.props.maestro()
    }

    render() {
        return (
            <form>
                <div>
                    Nueva tarea: <input type="text" onChange={this.handleTask} />
                    <button onClick={this.handleNewPost}>Añadir</button>
                </div>
                <button onClick={this.props.maestro}>Volver</button>
            </form>
        )
    }
}

export default Form;