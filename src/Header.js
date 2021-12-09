import { Link } from "react-router-dom";
import {FaChevronRight, FaHome} from 'react-icons/fa'

const Header=(props)=>{
    return(
        <>
        <div className="header">
            <Link to="/" ><span class="home-element"><FaHome className="icon" size={30}/> <span>Home</span></span></Link>
            {props.title} 
        {
            props.title === "Food Gallery"? 
        <Link to="/place" className="link"><FaChevronRight size={30}/>Next</Link>
            :
        <Link to="/food" className="link"> <FaChevronRight size={30}/>Previous</Link>

        }
        </div>
        

        </>
    )
} 
export default Header;