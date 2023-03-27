import { Typography } from "@material-tailwind/react";
import Footer from "./Footer";
import Nav from "./Nav";

const NotFound = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Nav />
			<div>
				<Typography variant="h2" className="text-center">
					404 Page Not Found!
				</Typography>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
