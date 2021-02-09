import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }

// Get input value
    fillInput = (e) => this.setState({ [e.target.name]: e.target.value });

// Add new Todo
    addTodo = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)

        this.setState({ title: '' });
    }
    

    render() {
        return (
            <form style={{ display: 'flex', padding: '0 10px', flexWrap: 'wrap' }} onSubmit={this.addTodo} >
                <input 
                    onChange={this.fillInput}
                    type="text" 
                    name="title"
                    className="text-input"
                    placeholder="Add Todo ..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn btn-submit"
                    style={{ flex: '1' }}
                />

            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}


export default AddTodo

