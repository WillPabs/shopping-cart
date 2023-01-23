import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
} from "@material-tailwind/react";

const Nav = () => {
	const [openNav, setOpenNav] = useState(false);
	const logo = "#";

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/" className="flex items-center">
					Home
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/about" className="flex items-center">
					About
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/shop" className="flex items-center">
					Shop
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/contact" className="flex items-center">
					Contact
				</Link>
			</Typography>
		</ul>
	);

	return (
		<Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
			<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="/"
					variant="h5"
					className="mr-4 cursor-pointer py-1.5 font-normal"
				>
					<span>Copped</span>
				</Typography>
				<div className="hidden lg:block">{navList}</div>
				<Button
					variant="gradient"
					size="sm"
					className="hidden lg:inline-block"
				>
					<span>Login</span>
				</Button>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<MobileNav open={openNav}>
				{navList}
				<Button variant="gradient" size="sm" fullWidth className="mb-2">
					<span>Login</span>
				</Button>
			</MobileNav>
		</Navbar>

		// <nav className="relative
		// w-full
		// flex flex-wrap
		// items-center
		// justify-between
		// py-4
		// bg-gray-100
		// text-gray-500
		// hover:text-gray-700
		// focus:text-gray-700
		// shadow-lg
		// navbar navbar-expand-lg navbar-light">
		//     <div id="logo-container" className="flex flex-row space-x-4 justify-center">
		//         <img src={logo} alt="logoImage" />
		//         <h3>{companyName}</h3>
		//     </div>
		//     <ul id="links-container" className="flex flex-row space-x-4 justify-center">
		//         <li className="nav-link">
		//             <Link to='/'>Home</Link>
		//         </li>
		//         <li className="nav-link">
		//             <Link to='/shop'>Shop</Link>
		//         </li>
		//         <li className="nav-link">
		//             <Link to='/about'>About</Link>
		//         </li>
		//         <li className="nav-link">
		//             <Link to='/contact'>Contact</Link>
		//         </li>
		//         <li className="nav-link">
		//             {cartButton}
		//         </li>
		//         <li className="nav-link">
		//             {loginButton}
		//         </li>
		//     </ul>
		// </nav>
	);
};

export default Nav;
