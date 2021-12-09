import Card from "./Card";
import Header from "./Header";
import ImagesMenu from "./ImageMenu";
import PlacesMenu from "./PlacesMenu";
import "./styles/card.css"

const Menu =()=>{
    return(
        <>
        <Header title={"Food Gallery"}/>
        <div class = "menu-parent">
        {ImagesMenu.map((imageMenu)=>{
            return(
                <div key={imageMenu.id}>
                    <Card image={imageMenu.image} title={imageMenu.title}
                     price={imageMenu.price} description={imageMenu.description} />
                    {/* <img src = {imageMenu.image} style={{"height":"30%", "width":"30%"}}/> <br /> 
                    <b>ID:</b> {imageMenu.id} <br />
                    <b>Title:</b> {imageMenu.title} <br />
                    <b>Category:</b> {imageMenu.category} <br />
                    <b>Price:</b> {imageMenu.price} <br />
                    <b>Description:</b> {imageMenu.description} <br /> <br /> */}

                </div>
            )
        })}
        </div>
        </>
    )
}
export default Menu;