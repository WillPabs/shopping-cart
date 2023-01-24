import Nav from "./Nav";
import Categories from "./Categories";
import { Typography } from "@material-tailwind/react";

const Homepage = () => {
	const banner = (
		<Typography
			variant="h1"
			className="justify-center text-center mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4"
		>
			Welcome to Copped! Browse Your Desired Item and Cop It!
		</Typography>
	);

	return (
		<div id="homepage">
			<Nav />
			{banner}
			<Categories />
		</div>
	);
};

export default Homepage;
