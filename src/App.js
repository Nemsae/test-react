import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList, Footer } from './components/todo';
import { addTodo, generateId, findById, updateTodo, toggleTodo } from './lib/todoHelpers';
import { pipe, partial } from './lib/utils';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Learn HTML', isComplete: false},
      {id: 3, name: 'Ship it', isComplete: false},
    ],
    currentTodo: '',
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))

    // const todo = findById(id, this.state.todos)
    // console.log('todo: ', todo);
    // const toggled = toggleTodo(todo)
    // console.log('toggled: ', toggled);
    // const updatedTodos = updateTodo(this.state.todos, toggled)
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({ todos: updatedTodos })
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newId = generateId()
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false,
    }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: '',
    })
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name',
    })
  }

  render() {
    const submitHandler = this.state.currentTodo.length > 0 ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}/>
          <TodoList
            todos={this.state.todos}
            handleToggle={this.handleToggle}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
