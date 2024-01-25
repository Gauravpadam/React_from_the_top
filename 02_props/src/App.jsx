import './App.css'
// In this project, we will create a component
// A component essentially makes html(jsx) reusable

// We will use a bit of tailwind for easy css addition
// Source to install tailwind on vite: https://tailwindcss.com/

// Props is short for properties
// These components make your code reusable
// But sometimes, you need to pass some parameters to customize each component to look different
// For example: Creating some cards with names on them

// This is done by passing parameters, or 'props'
// prop is an object, availabe to every component in react
// when you don't pass any parameters, prop object is empty
// when you do, it can be accessed normally using javascript

// Let's learn with the card example

import Card from './card'



function App() {

  return (
    <div className='flex-col justify-center'>
    <h1 className='bg-blue-700 rounded-xl text-white text-center font-semibold p-2'>Card example</h1>
    {/* Now good luck creating 100 more elements this way */}

    {/* <div class="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        class="z-0 h-full w-full rounded-md object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">Delba</h1>
        <p class="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div> */}

    {/* Instead, use a component */}

    <Card username="foo"/>
    <Card username="bar"/>

    </div>
  )
}

export default App
