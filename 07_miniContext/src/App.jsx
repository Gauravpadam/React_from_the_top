// There is no one "correct" way to define and use a context
// But the commented parts in this component were essentially a bug
// A very important one to understand some fundamentals

// Yes, whenever you're wrapping a component, wrap it from the outermost
// So, is wrapping it from inside the return going to work? no
// What about wrapping the whole function?
// React doesn't allow you to, it's a syntax break

// Where does this component get rendered though? index.jsx/main.jsx
// Correct, so, wrap the app component in main.jsx to wrap it whole, and use the context normally inside it


import { useContext, useState } from "react"
import UserContextProvider from "./contexts/UserContextProvider"
import Profile from "./components/Profile"
import UserContext from "./contexts/UserContext"

function App() {

  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const {setUser} = useContext(UserContext);


  const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username , password})
  }

  return (
    // <UserContextProvider> this won't cover the whole component
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <div>
            <p className="text-6xl my-8">Welcome to Foobar</p>
          </div>
          <div className="my-4">
            <label htmlFor="username" className="text-white">Username:</label>
            <input id="username" type="text" className="bg-white text-black" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
            <label htmlFor="password" className="text-white">Password</label>
            <input id="password" type="text" className="bg-white text-black" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <Profile/>
        </div>
      </div>
    // </UserContextProvider>
  )
}

export default App
