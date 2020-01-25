import React from 'react';
import { useSelector, useDispatch } from 'react-redux';




export default () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    return (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox"
                            checked={todo.complete}
                            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                        />
                        <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
                        <span className='delete-button' style={{
                            backgroundColor: "red",
                            marginLeft: "1rem",
                            cursor: "pointer"
                        }} onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>X</span>

                    </li>


                )

                )
            }
        </ul>
    )

}