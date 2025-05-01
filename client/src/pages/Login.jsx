import { useState } from "react"
import { useLogin } from '../hooks/useLogin'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isloading } = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

    return(
        <div className="auth flex flex-col">
            <div className="flex justify-center">
                <h3>Login to your account</h3>
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
                    <button disabled={isloading}>Log in</button>
                </div> 
            </form>
        </div>
    )
}