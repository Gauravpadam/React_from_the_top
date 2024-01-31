import { Link, NavLink } from 'react-router-dom'

// The difference between Link and NavLink is that
// NavLink can remember the states isActive and isPending

// When writing inline css or using frameworks, you can pass callbacks in className
// in order to track the isActive and isPending states and write css for them too
// (If you look closely, isActive is an object too)

// Alternatively, there's always the option of writing a separate css/scss

function Header() {
    return(
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex items-center mb-4 md:mb-0">
    <img
        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
        className="mr-3 h-12"
        alt="Logo"
    />
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" className={({isActive}) => {return (isActive ? "text-orange-900 hover:text-gray-900 mr-5" : "mr-5 hover:text-gray-900")}}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => `mr-5 hover:text-gray-900 ${isActive ? "text-orange-900" : "text-gray-600"}`}>About</NavLink>
      <NavLink to="/contact" className={({isActive}) => `mr-5 hover:text-gray-900 ${isActive ? "text-orange-900" : ""}`}>Contact</NavLink>
      <NavLink to="/github" className={({isActive}) => `mr-5 hover:text-gray-900 ${isActive ? "text-orange-900" : ""}`}>Github</NavLink>
    </nav>
  </div>
</header>
    )
}

export default Header