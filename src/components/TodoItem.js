import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MdCheckCircle, MdCancel } from 'react-icons/md'  
import { FiTrash2 } from 'react-icons/fi'


export class TodoItem extends Component {
    getStyle = (completed) => {
        return {
            padding: '15px 10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed? 'line-through' : 'none',
            transition: '0.5s ease',
            color: completed? 'rgba(0, 0, 0, 0.5)' : '#000',
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div className="todo-item"  style={this.getStyle(completed)}>
                <p>

                    { 
                        completed ? 
                        (<MdCancel onClick={this.props.markComplete.bind(this, id)} className="cancel-ico" />) :
                        (<MdCheckCircle onClick={this.props.markComplete.bind(this, id)} className="check-ico" />)
                    }

                        {title}

                   { completed && <FiTrash2 className="delete-ico" onClick={this.props.delTodo.bind(this, id)} />}
                </p>
            </div>

        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

// const styles = {   
//     btn: {
//         background: '#f00',
//         color: '#fff',
//         border: 'none',
//         padding: '5px 10px',
//         borderRadius: '50%',
//         cursor: 'pointer',
//         float: 'right',
//     }
// }

export default TodoItem
