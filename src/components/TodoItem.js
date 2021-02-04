import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = (completed) => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div style={this.getStyle(completed)}>
                <p onDoubleClick={this.props.markComplete.bind(this, id)}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed} />
                    {title}

                    <button 
                        style={styles.btn}
                        onClick={this.props.delTodo.bind(this, id)}
                    >x</button>
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

const styles = {   
    btn: {
        background: '#f00',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right',
    }
}

export default TodoItem
