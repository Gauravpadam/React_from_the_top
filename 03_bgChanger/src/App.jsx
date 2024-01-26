import { useState } from 'react'
import './App.css'
import Capsule from './Capsule'

// This is another use case of useState hook
// with this, state management becomes more clear

// This begins with a good understanding of callbacks and references
// A strong foundation of javascript helps

// handleDisco is holder the reference to a callback
// This callback starts an interval on the high priority queue
// This interval changes color with a frequency of '1000ms' (1s)

// In JS we achieved the same using DOM manipulation
// But useState lets you handle the states and sync UI updation without holding references

// In this interval, We build a new color leveraging math.random() and we set the new color

// The bug is, I cannot handle the case to stop multiple clicks for some reason
// why?

// The toolbar at the bottom contains color buttons which on clicking change the state of the color

function App() {
  const [color, setColor] = useState('#313131')
  const [disco, setDisco] = useState('Click here for a surprise')


  let digit = 0
  let newColor = ''
  let doSomeDisco = null

   let handleDisco = () => {
    if (doSomeDisco === null){
    setDisco(`It's disco time`)
    doSomeDisco = setInterval(() => {
      newColor = '#'
      for (let i = 0; i < 6; i++){

        digit = Math.round(Math.random() * 10) + 5
        
        if (digit === 10) newColor+='A';
        else if (digit === 11) newColor+='B';
        else if (digit === 12) newColor+='C';
        else if (digit === 13) newColor+='D';
        else if (digit === 14) newColor+='E';
        else if (digit === 15) newColor+='F';
        else newColor+=String(digit)
      }
      setColor(newColor)
  }, 1000)
}
}

  return (
    <div className='w-full h-screen' style={{backgroundColor: `${color}`}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <button style={{padding: '5px', backgroundColor: `white`, fontWeight: `600`}} onClick={handleDisco}>{disco}</button>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap p-2 rounded-full gap-20'>
          {/* Passing an onClick as a reference for the component button, as prop
              Another thing to notice? components have context of other components' states too*/}
          <Capsule passedColor='Red' colorChanger={() => setColor(`red`)}/>
          <Capsule passedColor='Green' colorChanger={() => setColor(`green`)}/>
          <Capsule passedColor='Blue' colorChanger={() => setColor(`blue`)}/>
          <Capsule passedColor='Olive' colorChanger={() => setColor(`olive`)}/>
          <Capsule passedColor='Brown' colorChanger={() => setColor(`brown`)}/>
          <Capsule passedColor='Cyan' colorChanger={() => setColor(`cyan`)}/>
          <Capsule passedColor='Maroon' colorChanger={() => setColor(`maroon`)}/>
          <Capsule passedColor='Turquoise' colorChanger={() => setColor(`turquoise`)}/>
          <Capsule passedColor='Teal' colorChanger={() => setColor(`teal`)}/>
        </div>
      </div>
    </div>
  )
}

export default App
