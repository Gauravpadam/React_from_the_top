import { useState } from "react";
import { removeTodo, updateTodo } from "../../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Todos() {

    const [isTodoEditable, setIsTodoEditable] = useState('false') // updateTodo
    
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
        >
            {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                    <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`} 
                    value={todo.text} disabled={isTodoEditable} onChange={(e) => {dispatch(updateTodo({id: todo.id, text: e.target.value}))}}></input>
                    <button  onClick={() => {dispatch(removeTodo(todo.id))}}>
                        X
                    </button>
                    <button onClick={() => {setIsTodoEditable(!isTodoEditable)}}>{isTodoEditable ? "Save" : "Edit"}</button>
                </div>
            ))}
        </div>
    );
}

export default Todos;