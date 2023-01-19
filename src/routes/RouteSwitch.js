import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Navbar from "../components/Navbar";
import Shop from "../components/Shop";

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route 
                    path='/shop/:productType' 
                    element={<Shop/>}
                >
                </Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/Navbar' element={<Navbar/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;