import React, {useState } from 'react'
const Config = require('../utils/Config.js');
const Messages = require('../utils/Messages.js')
var todoNumber = 0;

function Form(props) {
    const [input, setInput] = useState('');

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
            <input className='todo-input' 
                   type='text' 
                   name='text'
                   placeholder='Insert todo' 
                   value={input}
                   onChange={handleChange}/>
            <button className='todo-btn'>Add</button>
        </form>
    )
}

export default Form;
