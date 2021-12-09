import { Link } from "react-router-dom"

const IndexPage=()=>{
    return(
        <>
        <Link to ="/food" > Go to Food Gallery </Link>
        <br />
        <Link to ="/place" >Go to Places Gallery</Link>
        </>
    )
}

export default IndexPage