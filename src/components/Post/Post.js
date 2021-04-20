import React from 'react';
// import './Post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: { name: this.props.task, done: this.props.done, pri: this.props.pri}
        }
    }

    edTask = (event) => this.setState({ task: { name: event.target.value, done:this.state.task.done, pri:this.state.task.pri,} })

    checkTask = (event) => this.setState({ task: { name: this.state.task.name, done: !this.state.task.done, pri:this.state.task.pri } })

    priorityChange = (event)  => this.setState({ task: { name: this.state.task.name, done: this.state.task.done, pri: event.target.value } })

    componentWillUnmount() {
        //...
    }

    render() {
        return (
            <>
                <div className={`taskBox ${this.state.task.pri}`}>
                    <input type="checkbox" className="chk" onClick={this.checkTask} />

                    <h4 className={`${this.state.task.done}`}>{this.props.task}</h4>
                    
                    <input type="text" className="inp" placeholder="Edita esta tarea" onChange={this.edTask} />

                    <button onClick={() => this.props.editTask(this.props.num, this.state.task)}>Editar</button>

                    <button onClick={() => this.props.deleteTask(this.props.num)}>Borrar</button>

                    <select onChange={this.priorityChange}>
                        <option value="baja">Baja</option>
                        <option value="alta">Alta</option>
                    </select>
                </div>
                <hr />
            </>
        )
    }
}

export default Post;