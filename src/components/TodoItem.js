import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MdCheckCircle, MdCancel } from 'react-icons/md'


export class TodoItem extends Component {
    getStyle = (completed) => {
        return {
            background: completed? '#78CDD7' : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed? 'line-through' : 'none',
            transition: 'background 0.5s ease',
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div style={this.getStyle(completed)}>
                <p onDoubleClick={this.props.markComplete.bind(this, id)} style={{ position: 'relative' }}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed} />
                    {title}

                    {/* <button 
                        style={styles.btn}
                        onClick={this.props.delTodo.bind(this, id)}
                        className="brn-cancel"
                    ></button> */}
                    { completed? (<MdCheckCircle onClick={this.props.delTodo.bind(this, id)} className="check-ico" />) : (<MdCancel onClick={this.props.delTodo.bind(this, id)} className="cancel-ico" />)}
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
