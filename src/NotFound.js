import {Link} from 'react-router-dom'
import error from './photos/error.jpg'
import {FaHome} from 'react-icons/fa'
import "./styles/card.css"
const NotFound =()=>{
    return(
        <>
        <img className="notfound" src= {error} alt="Error Page" />
        <br />
        <Link to="/"><FaHome size={75}/></Link>
        </>
    )
}
export default NotFound