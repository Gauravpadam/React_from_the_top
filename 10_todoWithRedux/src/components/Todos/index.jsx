import { useState } from "react";
import { removeTodo, updateTodo } from "../../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Todos() {

    const [msg, setMsg] = useState('') // updateTodo
    const [isTodoEditable, setIsTodoEditable] = useState('false') // updateTodo
    
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const editTodoHandler = () => {
        console.log("updateTodo")
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
        >
            {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                    <p className="text-black">{todo.text}</p>
                    <button  onClick={() => {dispatch(removeTodo(todo.id))}}>
                        X
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Todos;