import { useState } from "react"
import { useSignup } from '../hooks/useSignup'

export const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(username, password)
    }

    return(
        // <div className="signup flex flex-col">
        //     <div className="flex justify-center">
        //         <h3>Create a new account</h3>
        //     </div>
        // </div>
        <form className="signup-form flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="signup-username flex flex-col">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className="signup-password flex flex-col">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="signup-password-input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div> 
                <div className="signup-button-div flex justify-center">
                    <button disabled={isLoading} >Sign Up</button>
                </div> 
                {error ?? <div className='error'>{error}</div>}
            </form>
    )
}