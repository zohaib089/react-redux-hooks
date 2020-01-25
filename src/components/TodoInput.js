import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4'
export default () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const onChange = e => {
        setTodo(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (todo.trim() === '') return;

        const Todo = {
            id: uuid(),
            name: todo,
            complete: false
        }
        dispatch({ type: 'ADD_TODO', payload: Todo })
        console.log(Todo);
        setTodo('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-div">
                <input type="text"
                    name="todo"
                    placeholder="Add a todo"
                    value={todo}
                    onChange={onChange}
                />
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
}


