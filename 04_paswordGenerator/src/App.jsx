import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password , setPassword] = useState('')
  const [isCharAllowed , setIsCharAllowed] = useState(false)
  const [isNumAllowed , setIsNumAllowed] = useState(false)
  const[passLength , setPassLength] = useState(8)

  // Source: https://react.dev/reference/react/useCallback
  // Since this function is going to be called many times,
  // It is wise to not let it re-render and memoize it
  // So, would I use useMemo or useCallback?
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isCharAllowed) str+="~`!@#$%^&*()_+-=[]{}\|";
    if (isNumAllowed) str+="0123456789";

    for (let i = 0; i < passLength; i++){
        pass+= str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)


  }, [isCharAllowed, isNumAllowed, passLength, setPassword])

  // useCallback, because it stores the entire callback
  // when the dependencies (useCallback(fn , dependencies)) in useCallback are the same;
  // It returns the memoized function and avoids the re-render of component
  // This optimizes our site

  // useMemo also memoizes, but the result of the function, not the whole function
  // useCallback suits our context better because the function will be called many times
  // It is better to memoize the whole callback

  // (Assuming the UI is ready)
  // Now, when I run the function

  // passwordGenerator()

  // Does it work? No
  // Too may re-renders
  // To stop this, we use useEffect hook

  // useEffect(useEffect = (fn , dependencies)) works (renders) only when
  // the dependencies change

  // useEffect can also return a cleanup function
  // which cleans up the effect of the previous useEffect call
  // And then applies the new useEffect

  useEffect(() => {
    passwordGenerator()
    console.log(passwordRef);
  }, [passLength, isNumAllowed, isCharAllowed, passwordGenerator])

  // only one thing remains, Copy the password to clipboard
  // For this, we will use useRef hook

  // Source: https://react.dev/reference/react/useRef
  // useRef is used to store a reference of a plain javascript object
  // Since it is a plain js object, it does not cause (should not cause) any re-rendering on being changed
  // and react does make it mutable for the same purpose

  // It returns a single property .current
  // Let's see what it holds

  const passwordRef = useRef(null) // Initial reference is null
  // we will define a reference using ref attribute

  // Once a ref is defined below in password input, let's console.log(passwordRef) in useEffect and see what happens
  // It prints an object
  // with a current property holding the reference to the entire input element
  // So? we'll use that to select the input and show a copy effect to the users

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password) // Note: The window object is always available in a client side rendering library
    // like reactjs
    // In a framework like like NextJS where rendering occurs on the server side, window object won't be available
  } , [password])

  // That's it, hooks masterclass complete


  return (
      <div className='w-full max-w-md mx-auto shadow-md bg-gray-800 text-orange-500 px-4 py-3 my-8 rounded-lg'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='w-full py-1 px-3 outline-none' placeholder='Password' 
          ref={passwordRef}
          readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={8} max={100} value={passLength} className='cursor-pointer'
            onChange={(e) => {setPassLength(e.target.value)}}/>
            <label>Length: {passLength}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={isNumAllowed} className='cursor-pointer'
            onChange={() => {setIsNumAllowed((prev) => !prev)}}/>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={isCharAllowed} className='cursor-pointer'
            onChange={() => {setIsCharAllowed((prev) => !prev)}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    
  )
}

export default App
