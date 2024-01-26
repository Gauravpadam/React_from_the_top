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

    // An interesting interview question

    // setCounter(++counter) // essentially you're doing 16
    // setCounter(++counter) // 17
    // setCounter(++counter) // 18
    // setCounter(++counter) // 19

    // What happens now? what will be the final value of counter after incrementing?
    // We did pre-increment; The value indeed jumps by 5 first time, then by 4 since upper if block does not allow one execution

    // But what if

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // This is where batch scheduling of react kicks in;
    // It will only increment the value by one, treating it as a same operation hence batch operation
    // No matter how many setCounters you send

    // If you want to achieve this for some reason however, you can send a callback function inside setCounter
    // (or the pre-increment works too)

    // Moral of the story, setCounter takes a callback function as an argument and works on it
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

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
