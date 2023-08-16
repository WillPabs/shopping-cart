import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
} from "@material-tailwind/react";
import Cart from "./Cart";

const Nav = () => {
	const [openNav, setOpenNav] = useState(false);
	const [openCart, setOpenCart] = useState(false);
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
		<div>
			<Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
				<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
					<Typography
						as="li"
						variant="h5"
						className="mr-4 cursor-pointer py-1.5 font-normal"
					>
						<Link to="/" className="flex items-center">
							Copped
						</Link>
					</Typography>
					<div className="hidden lg:block">{navList}</div>

					<div className="flex items-center gap-4">
						<Button
							variant="gradient"
							size="sm"
							className="hidden lg:inline-block"
						>
							<span>Login</span>
						</Button>
						<IconButton
							variant="text"
							size="sm"
							className="ml-auto"
							onClick={() => setOpenCart(!openCart)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="black"
								className="h-6 w-6 bi bi-cart"
								viewBox="0 0 16 16"
							>
								{" "}
								<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
							</svg>
						</IconButton>
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
				</div>
				<MobileNav open={openNav}>
					{navList}
					<Button
						variant="gradient"
						size="sm"
						fullWidth
						className="mb-2"
					>
						<span>Login</span>
					</Button>
				</MobileNav>
			</Navbar>
			{openCart && <Cart />}
		</div>
	);
};

export default Nav;
