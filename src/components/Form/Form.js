import React from 'react';
// import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: { name: "" }
        }
    }

    handleTask = event => this.setState({ task: { name: event.target.value, done: false , pri: "baja" } })

    handleNewPost = event => {
        event.preventDefault()
        this.props.addTask(this.state.task)
    }

    render() {
        return (
            <form>
                Nueva tarea: <input type="text" onChange={this.handleTask} />
                <button onClick={this.handleNewPost}>Añadir</button>
            </form>
        )
    }
}

export default Form;