import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from './Menu';
import PlacesMenu from './PlacesMenu';
import IndexPage from './IndexPage';
import NotFound from './NotFound';
import RoutesData from './RoutesData';
const Pages =()=>{
    return(
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<IndexPage/>}/>
<Route  path="/food" element={<Menu/>}/>
<Route  path="/place" element={<PlacesMenu/>}/>
{/* {RoutesData.map((data,index)=>{
    return(
        <Route key={index} path= {data.url} element={data.component}/>
    )
})} */}







<Route path="*" element={<NotFound/>}/>
</Routes>

</BrowserRouter>
</>
    )
}
export default Pages;