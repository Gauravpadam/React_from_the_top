import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'

// In such a case where you export contexts from a single file
// You don't define the whole value of the context while creating it; you essentially create prototypes

// You're supposed to define these prototypes in the components and use them to change states
// But you're kind of overriding the default context? yes, in a way
// It depends on your end goal; In this project, the end goal is to sync the themeMode state with all components

// That's achieveable by defining some context functions inside components

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actually change the theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light" , "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode, setThemeMode]) // Run the theme changer whenever there is a change in themeMode

  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />   
          </div>
        </div>
      </div>
      </ThemeProvider>
  )
}

export default App
