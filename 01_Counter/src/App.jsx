// This is a simple counter project
// Which will focus on the power of UI updation in react

// Below, we have 4 elements which display the counter value
// The buttons change the counter value

// Problem is that clicking those buttons and calling the functions won't actually increase/ecrease the counts
// Why? It's fundamental javascript, We need DOM manipulation to achieve this

// Now, Imagine a case with 1000 such tags holding a so called counter
// We can't take references of a thousand elements and manipulate the textnodes inside them
// That is impractical

// This is the beginning of react's state management
// react 'reacts' to the state changes

import { useState } from 'react';

function App() {

  // let counter = 15 

  // A useState hook automatically scans the DOM for all the state changes required
  // and syncs them with the UI; avoiding the reference taking hell
  // UI updation 101

  let [counter , setCounter] = useState(15)

  // handler function make calls to useState references

  const addCount = () => {
    if (counter < 20){
      // setCounter(counter++) bug: counter++ updates the counter after the function is executed(post-increment)
      setCounter(++counter) // pre-increment; first update then reference
      console.log("I increased counter to " , counter);
    } // don't go beyond 20
  }

  const removeCount = function(){
    if (counter > 0){
      // setCounter(counter--) post-increment
      setCounter(--counter) // pre-increment; first update then reference
      console.log("I decreased counter to " , counter);
    }
  }

  // Now try this out

  return (
    <>
    <h2>Counter: {counter}</h2>
    <button onClick={addCount}>Add Value: {counter}</button>
    <button onClick={removeCount}>Remove Value: {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
