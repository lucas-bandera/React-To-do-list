import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem.js'


export default class Todos extends Component {
    render() {
        return (
            <div className="todo-list">
               { this.props.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
                ))}
            </div>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
