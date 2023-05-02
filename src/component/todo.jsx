const Todo = ({
    todo, 
    handleDelete, 
    handleDone, 
    setShowModal,
    setEditingTodo,
}) => {

    return (
        <div className = 'border shadow p-3 d-flex justify-content-between align-items-center rounded' >
            <div className="d-flex flex-column">
                <h5 style={{ textDecoration: todo.isDone ? 'none' : 'line-through' }}>
                    {todo.title}
                </h5>
                <p>{todo.date}</p>
            </div>
            <div className='btn-group'>
                <button className='btn btn-danger' onClick={() => { handleDelete(todo) } }>Delete</button>
                <button className='btn btn-primary' onClick={()=>{
                    setShowModal(true);
                    setEditingTodo(todo);
                    }}>Edit</button>
                <button className='btn btn-success' onClick={() => { handleDone(todo) } }>{todo.isDone ? 'To do' : 'Done'}</button>
            </div>
        </div>

    );
}

export default Todo;