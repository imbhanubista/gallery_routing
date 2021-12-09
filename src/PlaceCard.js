
const PlaceCard=({image,name,description})=>{
    return(
        <div className="card">
            <img src={image} alt="" />
            <div className="container">
            <h3>{name}</h3>
            <p>{description}</p>
            </div>
        </div>


    )
}
export default PlaceCard;