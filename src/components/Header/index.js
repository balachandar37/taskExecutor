import { useNavigate } from "react-router-dom"
import "./index.css"

const Header = () => {
    const navigate = useNavigate()
    const onClickLougout = () => {
        navigate('/')
    }
    return(
        <nav className="nav">
           <button type="button" onClick={onClickLougout} className="logout-button" >Logout</button>
        </nav>
    )
}

export default Header