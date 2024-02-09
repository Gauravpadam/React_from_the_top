import Container from "../Container";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export const Header = (props) => {

    const authStatus = useSelector((state) => state.auth.status)

    const navItems = [
        {
            text: "Home",
            onclick: useNavigate("/"),
            active: authStatus
        },
        {
            text: "Blogs",
            onclick: useNavigate("/blogs"),
            active: authStatus
        },
        {
            text: "Login",
            onclick: useNavigate("/login"),
            active: !authStatus
        },
        {
            text: "Sign Up",
            onclick: useNavigate("/signup"),
            active: !authStatus
        },
    ]
    return(
    <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px' />
  
                </Link>
            </div>
            <ul className='flex ml-auto'>
                {navItems.map((item) => (
                    item.active ? <div key={item.text}>
                        <button onClick={item.onclick}>{item.text}</button>
                    </div>
                    : null
                ))}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
          </Container>
    </header>
    )
}