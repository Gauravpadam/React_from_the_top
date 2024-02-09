import { useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/authService"


export const LogoutBtn = () => {

    dispatch = useDispatch()
    
    const handleLogout = () => {
        authService.logout()
        .then(() => {dispatch(logout())})
    }

    return <button onClick={handleLogout}>Logout</button>

}