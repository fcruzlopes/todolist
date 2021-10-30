import React, {useState} from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Todo({todos, completetodo, removeTodo}) {
    const [edit, setEdit] = useState();

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
             key={index}>
            <div key={todo.id} onClick={() => completetodo(todo.id)}>
                {todo.text}
            </div>
            <div className='todo-icon'>
                <RiCloseCircleLine 
                    className='todo-deleteIcon'
                    onClick = {() =>removeTodo(todo.id)}/>
                <TiEdit 
                    className='todo-editIcon'
                    onClick = {() => setEdit({id: todo.id, value: todo.text})}/>
            </div> 
        </div>
    ));
}

export default Todo;
