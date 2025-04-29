import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="nav-container flex justify-between">
            <Link to={'/'}>
                <h5 className="">Character Sheet App</h5>
            </Link>
            <div className="nav-options flex gap-8">
                <Link to={'/signup'}>
                    <p>Sign Up</p>
                </Link>
                <Link to={'/login'}>
                    <p>Login</p>
                </Link>
            </div>
        </div>
    )
}