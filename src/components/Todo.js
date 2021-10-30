import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Todo({todos, completetodo}) {
    // const [edit, setEdit] = useState({
    //     id: null,
    //     value = ''
    // });
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
             key={index}
        >
            <div className='todo-icon'kye={todo.id} onClick={() => completetodo(todo.id)}>
                {todo.text}
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    ));
}

export default Todo;
