import React, { Component } from 'react'
import axios from 'axios'
 
import Todos from './components/Todos.js'
import About from './pages/About'
import AddTodo from './components/AddTodo.js'

import Header from './components/layout/Header'

export default class App extends Component {
  state = {
    todos: [],
    placeholderId: 0
  }

// GET all todos from json placeholder as soons as component mounts
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      this.setState({todos: res.data})
    }).catch(err => console.log(err))
  }

// Toggle task completion
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    }) 
  })
} 

// Delete Todo
  delTodo = (id) => {
  
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    .catch(err => console.log(err))
  }


// Add new Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(
      (res) => {
        const newTodo = res.data
        let placeholderId = this.state.placeholderId
        newTodo.id += placeholderId;
        
        this.setState({ todos: [...this.state.todos, newTodo ], placeholderId: placeholderId  + 1})
    }
      )
    .catch(err => console.log(err))
  }


  render() {
    return (

      <div className="App">
        <div className="container">
          <Header />
          
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                       
        </div>

      </div>

    )
  }
}
