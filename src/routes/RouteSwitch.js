import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Nav from "../components/Nav";
import NotFound from "../components/NotFound";
import Shop from "../components/Shop";

const RouteSwitch = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="/shop/:productType" element={<Shop />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
				<Route path="/Nav" element={<Nav />}></Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
