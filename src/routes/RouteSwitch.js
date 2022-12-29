import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Header from "../components/Header";
import Shop from "../components/Shop";

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/header' element={<Header/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;