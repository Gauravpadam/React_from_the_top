import {Link , NavLink} from 'react-router-dom';

function Footer() {
    return(
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <Link to="/" className="flex items-center mb-4 md:mb-0">
    <img
        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
        className="mr-3 h-12"
        alt="Logo"
    />
  </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">The foo company -
      <a href="https://www.example.com" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@TheFooCompany</a>
    </p>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" className={({isActive}) => {return (isActive ? "text-orange-900 hover:text-gray-900 mr-5" : "mr-5 hover:text-gray-900")}}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => `mr-5 hover:text-gray-900 ${isActive ? "text-orange-900" : "text-gray-600"}`}>About</NavLink>
      <NavLink to="/contact" className={({isActive}) => `mr-5 hover:text-gray-900 ${isActive ? "text-orange-900" : ""}`}>Contact</NavLink>
      <NavLink to="/github" className={({isActive}) => `mr-5 hover:text-gray-900 ${isActive ? "text-orange-900" : ""}`}>Github</NavLink>
    </nav>
  </div>
</footer>
    )
}

export default Footer