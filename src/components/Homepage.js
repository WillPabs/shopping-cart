import Nav from "./Nav";
import Categories from "./Categories";
import Footer from "./Footer";
import { Typography } from "@material-tailwind/react";

const Homepage = () => {
	const banner = (
		<Typography
			variant="h1"
			className="justify-center text-center mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4"
		>
			Welcome to Copped! Like It, Click It, Cop It!
		</Typography>
	);

	return (
		<div id="homepage" className="flex flex-col min-h-screen">
			<Nav />
			{banner}
			<Categories />
			<Footer />
		</div>
	);
};

export default Homepage;
