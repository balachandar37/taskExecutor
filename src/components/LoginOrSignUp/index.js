import { useNavigate } from "react-router-dom";
import './index.css'

const LoginOrSignUp = () => {
    const navigate = useNavigate()

    const onClickLogin = () => {
        navigate("../login", { replace: true })
    }

    const onClickSignUp = () => {
        navigate("../signup", {replace: true} )
    }

    return(
        <div className="background-container">
            <div className="content-bg">
                <h1>Welcome!</h1>
                <h1>Master and Student Task Executor</h1>
                <button type="button" className="button" onClick={onClickLogin}>Login</button>
                <button type="button" className="button" onClick={onClickSignUp}>Sign Up</button>
            </div>
        </div>
    )
}



export default LoginOrSignUp