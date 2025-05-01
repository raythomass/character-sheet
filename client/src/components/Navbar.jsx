import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'

export const Navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handleClick = async (e) => {
        logout()
    }

    return (
        <div className="nav-container flex justify-between">
            <Link to={'/'}>
                <h5 className="">Character Sheet App</h5>
            </Link>
            { user && 
                <div className="nav-user flex gap-8">
                    <p>{user.username}</p>
                    <button onClick={handleClick}>Logout</button>
                </div>
            }
            { !user && 
                <div className="nav-options flex gap-8">
                    <Link to={'/signup'}>
                        <p>Sign Up</p>
                    </Link>
                    <Link to={'/login'}>
                        <p>Login</p>
                    </Link>
                </div>
            }
        </div>
    )
}