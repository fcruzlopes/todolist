import React, {useState, useEffect, useRef} from 'react'
const Config = require('../utils/Config.js');
const Messages = require('../utils/Messages.js')
var todoNumber = 1;

function Form(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    /*Handle the action of submit while clicking
     the add button in the form. Submits the todo
     in the list*/
    const handleSubmit = param => {
        param.preventDefault();
        if(todoNumber > Config.maxListSize)
        {
            console.log(Messages.maximumLengthReachedException);
            <h2>{Messages.maximumLengthReachedException}</h2>
            return;
        }

        props.onSubmit({
            id: todoNumber,
            text: input
        });
        todoNumber++;
        setInput('');
    };

    /*Refreshes the useState inputs */
    const handleChange = param => {
       setInput(param.target.value); 
    };

    return (
        <form className='todo-form' onSubmit = {handleSubmit}>
            {props.edit ? (
                <>
            <input className='todo-input edit' 
                   type='text' 
                   name='text'
                   placeholder='Update your item' 
                   value={input}
                   onChange={handleChange}
                   ref={inputRef}/>
            <button className='todo-btn edit'>Update</button> 
            </>
            ) : (
            <>
            <input className='todo-input' 
                   type='text' 
                   name='text'
                   placeholder='Insert todo' 
                   value={input}
                   onChange={handleChange}
                   ref={inputRef}/>
            <button className='todo-btn'>Add</button>
            </>)}
        </form>
    )
}

export default Form;
