import React, {useState } from 'react'
const Config = require('../utils/Config.js');
const Messages = require('../utils/Messages.js')
var todoNumber = 0;

function Form(props) {
    const [input, setInput] = useState('');
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
    const handleChange = param => {
       setInput(param.target.value); 
    };

    return (
        <form className='todo-form' onSubmit = {handleSubmit}>
            <input className='todo-input' 
                   type='text' 
                   name='text'
                   placeholder='Add a todo task' 
                   value={input}
                   onChange={handleChange}/>
            <button className='todo-btn'>Add</button>
        </form>
    )
}

export default Form;
