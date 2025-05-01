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
        <div className="auth flex flex-col">
            <div className="flex justify-center">
                <h3>Create a new account</h3>
            </div>
            <form className="auth-form flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="auth-username flex flex-col">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        className="focus:outline-(--crimson)"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    {error &&
                        <div className='error'>
                            <small className="">{error}</small>
                        </div>
                    }
                </div>
                <div className="auth-password flex flex-col">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="focus:outline-(--crimson)"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div> 
                <div className="auth-button-div flex justify-center">
                    <button disabled={isLoading}>Sign Up</button>
                </div> 
            </form>
        </div>
    )
}