import { useState } from "react";

function TodoItem({ todo }) {
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(todo.completed)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    // A thing to ponder about
    // Please keep the context in mind when writing components as well
    // add, update, delete and toggle; all are defined in App.jsx
    // Here, we make call to the contexts

    //But why here?
    // Because the todo message edit functionality exists over here, so the call is being made from here
    // Likewise for toggling the completed state, onChange is calling toggleCompleted which callbacks toggleComplete and toggles the complete property of the todo object
    // And delete button is calling deleteTodo onClick

    // Thus, all the states stay in sync and the purpose of context is established
    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false) // once edited, disable the edit state
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
