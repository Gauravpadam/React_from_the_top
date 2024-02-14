import { useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/authService"


export const LogoutBtn = () => {

    const dispatch = useDispatch()
    
    const handleLogout = async () => {
        await authService.logout()
        .then(() => {dispatch(logout())})
    }

    return <button className="'inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'" onClick={handleLogout}>Logout</button>

}