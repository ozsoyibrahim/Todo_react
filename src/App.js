import React, { useState } from 'react';
import ErrorBoundary from "./component/ErrorBoundary";
import Todo from './component/todo';
import Modal from './component/modal';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText) {
      alert('Formu Doldur');
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      title: todoText,
      date: new Date().toLocaleString(),
      isDone: true,
    };

    setTodos([...todos, newTodo]);

    setTodoText('');
  };

  const handleDelete = (deletedTodo) => {
    const filtred = todos.filter((item) => item.id !== deletedTodo.id);
    setTodos(filtred);
  };

  const handleDone = (todo) => {
    const index = todos.findIndex((item) => item.id === todo.id);

    const newValue = !todos[index].isDone;

    const doneTodo = { ...todo, isDone: newValue };

    const newTodos = [...todos]

    newTodos.splice(index, 1, doneTodo);
    // console.log(todos);

    setTodos(newTodos);
  };

  const handleSaveEdit = ()=> {
    if(!editingTodo.title){
      alert('Yeni Değer Girmediniz...');
      return;
    }


    let index = todos.findIndex((item)=>item.id === editingTodo.id);

    const cloneTodos = [...todos];

    cloneTodos.splice(index, 1, editingTodo);

    setTodos(cloneTodos);
    setShowModal(false);
  }

  return (
    <div>

      <h1 className="bg-dark text-light p-2 logo-font">i/Q"zsoy</h1>
      <ErrorBoundary>
        <div className="container border p-3 mt-3">
          <form onSubmit={handleSubmit} className="d-flex g-3 p-3">
            <input className="form-control" type="text" placeholder="Write down what to do..."
              value={todoText}
              onChange={(e) => { setTodoText(e.target.value) }} 
              />
            <button className="btn btn-warning btn-large">Add</button>
          </form>

          <div className="d-flex flex-column p-3">
            {
              todos.length === 0 && (<h4 className='text-center'>You have nothing to do...</h4>)
            }
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                handleDelete={handleDelete}
                todo={todo}
                handleDone={handleDone}
                setShowModal={setShowModal}
                setEditingTodo={setEditingTodo}
              />
            ))}
          </div>
        </div>
        {
          showModal && (
            <Modal 
            editingTodo={editingTodo} 
            setEditingTodo={setEditingTodo} 
            setShowModal={setShowModal} 
            handleSaveEdit={handleSaveEdit}
            />
          )
        }
      </ErrorBoundary>
    </div>

  );
}

export default App;
