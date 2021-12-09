import'./styles/card.css'
const Card=({image,title,price,description})=>{
    return(

        <div className="card">
            <img src={image} alt="Items Image" />
            <div className="container">
                <h3>{title}</h3>
                <h4>{price}</h4>
                <p>{description}</p>

            </div>
        </div>
    )
}
export default Card;