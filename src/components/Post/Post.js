import React from 'react';
// import './Post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: props.task
        }
    }

    doneChange = async (event) => {
        await this.setState({ task: { name: this.state.task.name, done: !this.state.task.done, pri: this.state.task.pri, id: this.state.task.id } })

        this.props.updateTask(this.state.task)
    }

    priorityChange = async (event) => {
        await this.setState({ task: { name: this.state.task.name, done: this.state.task.done, pri: event.target.value, id: this.state.task.id } })

        console.log(this.state.task);

        this.props.updateTask(this.state.task)
    }

    componentWillUnmount() {
        //...
    }

    render() {
        return (
            <>
                <div className={`taskBox ${this.state.task.pri}`}>
                    <h5 className={`${this.state.task.done}`}>{this.props.task.name}</h5>
                    <div>
                        <input type="checkbox" className="chk" onClick={this.doneChange} />
                        <button onClick={() => this.props.editDet(this.state.task)}>Editar</button>
                        <button onClick={() => this.props.deleteTask(this.props.task.id)}>Borrar</button>
                        <select onChange={this.priorityChange}>
                            <option value="" selected disabled hidden>Prioridad</option>
                            <option value="baja">Baja</option>
                            <option defaultSelected value="alta">Alta</option>
                        </select>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}

export default Post;