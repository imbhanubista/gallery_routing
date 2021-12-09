import Header from './Header';
import PlaceCard from './PlaceCard';
import Places from './Places'
const PlacesMenu=()=>{
    return(
        <>
        <Header title = {"Place Gallery"}/>
        <div className="pphoto-parents">
        {Places.map((placeMenu)=>{
            return(
                <>
                <PlaceCard image={placeMenu.image} name={placeMenu.name} 
                description={placeMenu.description}/>

                {/* Arko Tarika Yo pani ho  */}
                {/* ID: {placeMenu.id}
            Place: {placeMenu.name}
            Description: {placeMenu.description} */}
                </>
            )
        })}
        </div>
        </>
    )
}
export default PlacesMenu;