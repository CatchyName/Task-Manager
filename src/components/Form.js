import React, {useState} from 'react'

const Form = ( { addTask, } ) => {

    const [inputText, setInputText] = useState('');

    function inputChangeHandler (e){
        e.preventDefault();
        setInputText(e.target.value);
    }

    function buttonHandler(e){
        e.preventDefault();
        addTask({
            text: inputText,
            done: false
        });
        setInputText('');
    }

    return (
        <form>
            <input id='input' type='text' placeholder='What you wanna do?' onChange={inputChangeHandler} value={inputText}></input>
            <button onClick={buttonHandler}>Add task</button>
        </form>
    );
}
 
export default Form;