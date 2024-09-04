import { useState } from "react"; // import needed hooks

//import needed components
import Task from "./task.jsx" 


//main app function
function Todo() {
    // declarations section
    const [todos, setTodos] = useState([]); //declare array of todos list
    const [inputValue, setInputValue] = useState(""); //declare input field value
    const todosList = todos.map((task,i) => {
        return <Task key={i} id={i} setTodos={setTodos} task={task} swapArrayElements={swapArrayElements} handleDelete={handleDelete}/>
    }); // create the elements of todos with props

    function handleClick(e) {
        
        if (e.type === "keyup" && e.key !== "Enter")
            return; //to execute the function in case user clicks Enter

        if (inputValue.trim() !== "") {
            setTodos([...todos,inputValue]);
        }; // check for non-empty string

        setInputValue(() => ""); // reset the input
    }

    function handleType(e) {
        setInputValue(() => e.target.value)
    } // handle text input 

    function handleAnimation(e) {
        e.target.classList.toggle("border-animation");
        setTimeout(() => {e.target.classList.toggle("border-animation")},30)
    } // style animation toggle

        /**
        * Swaps the positions of two elements in an array using a React useState setter function.
        * @param {function} setter - The setter function from React's useState hook.
        * @param {number} index - The current index of the element to be moved.
        * @param {number} newIndex - The target index where the element should be moved to.
        * @throws {Error} If the array has fewer than two elements or if indices are out of bounds.
            */
    function swapArrayElements(setter,index, newIndex) {
        setter((s) => {
            if (s.length <= 1) {
                alert("Array is empty or has only one element. Nothing to switch.");
                return [...s]
            }
            if (index < 0 || index >= s.length) {
                alert("Index out of bounds.");
                return [...s]
            }
    
            const prevS = [...s]; // Create a copy of the current state
    
            if (newIndex < 0 || newIndex >= s.length) {
                alert(`Invalid move. Element is already at the boundary.`);
                return [...s]
            }
    
            // Swap elements
            [prevS[index], prevS[newIndex]] = [prevS[newIndex], prevS[index]];
    
            return prevS; // Return the modified array
        });
    }
    function handleDelete(setter,i) {
        setter((s) =>{
            const prevS = [...s];
            prevS.splice(i,1);
            return prevS;
        })
    }

    

    // function handleUpClick(i) {
    //     setTodos((t) => {
    //         prevTodos = [...t]
    //         const backup = prevTodos[i]
    //         prevTodos.splice(i,1).splice[i,0,backup]
    //     })
    // }
    // function handleDownClick() {
        
    // }

    return (
        <>
            <h1>Todo application</h1>
            <div className="input-container">
                <input type="text" name="todo-input" id="my-todo" placeholder="ex:coding" value={inputValue} onChange={handleType} onKeyUp={handleClick}/>
                <input type="button" value="Add" onClick={(e) => {handleClick(e);handleAnimation(e)}}/>
            </div>
            <div className="todo-list">
                {todosList}
            </div>
        </>
    ); // render the main function with the todos list 
}

export default Todo;

//we need to pass setTodos to swapArrayElements