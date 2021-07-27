import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	IconButton,
	MenuItem,
	Menu,
	Button,
} from "@material-ui/core/";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, useHistory } from "react-router-dom";
import { Home as HomeIcon, Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		[theme.breakpoints.down("xs")]: {
			flexGrow: 1,
		},
	},
	NavbarOptions: {
		display: "flex",
		marginLeft: "auto",
		justifyContent: "space-around",
	},
	active: {
		color: "primary",
	},
}));

const Navbar = (props) => {
	const history = useHistory(props);
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};

	const logout = () => {
		localStorage.removeItem("token");
		alert("You've Logged Out!");
		history.push("/landing");
	};

	// TODO: add list of menu items here for when logged in.
	const menuItemsLoggedIn = [
		{
			menuTitle: "",
			pageURL: "/",
		},
	];
	const menuItemsLoggedOut = [
		{
			menuTitle: "Login",
			pageURL: "/login",
		},

		{
			menuTitle: "Sign Up",
			pageURL: "/signup",
		},
	];

	// if statement displays navbar items according to if user is logged in or not
	if (localStorage.getItem("token")) {
		return (
			<div className={classes.root}>
				<AppBar position="static" color="info">
					<Toolbar>
						<IconButton color="inherit">
							<HomeIcon
								onClick={() => handleButtonClick("/landing")}
								fontSize="large"
							/>
						</IconButton>
						{/* switch statement checks for mobile device */}
						{isMobile ? (
							<>
								<IconButton
									edge="start"
									className={classes.menuButton}
									color="inherit"
									aria-label="menu"
									onClick={handleMenu}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={open}
									onClose={() => setAnchorEl(null)}
								>
									{/* maps over logged in menu items and displays them to navbar */}
									{menuItemsLoggedIn.map((menuItem) => {
										const { menuTitle, pageURL } = menuItem;
										return (
											<MenuItem onClick={() => handleMenuClick(pageURL)}>
												{menuTitle}
											</MenuItem>
										);
									})}
								</Menu>
							</>
						) : (
							// displays menu items for logged in if not on a mobile device */
							<div className={classes.NavbarOptions}>
								{/* maps over logged in navbar items and displays them accordingly */}
								{menuItemsLoggedIn.map((menuItem) => {
									const { menuTitle, pageURL } = menuItem;
									return (
										<Button
											color="inherit"
											onClick={() => handleButtonClick(pageURL)}
										>
											{menuTitle}
										</Button>
									);
								})}
								{/* displays button for signout and removes local storage session on click */}
								<Button color="inherit" onClick={() => logout()}>
									Sign Out
								</Button>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
	// else statement for if user is not signed in
	else {
		return (
			<div className={classes.root}>
				<AppBar position="static" color="info">
					<Toolbar>
						<IconButton color="inherit">
							<HomeIcon
								onClick={() => handleButtonClick("/landing")}
								fontSize="large"
							/>
						</IconButton>
						{/* switch statement checks for mobile device */}
						{isMobile ? (
							<>
								<IconButton
									edge="start"
									className={classes.menuButton}
									color="inherit"
									aria-label="menu"
									onClick={handleMenu}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={open}
									onClose={() => setAnchorEl(null)}
								>
									{/* maps over logged out menu items and displays them to navbar */}
									{menuItemsLoggedOut.map((menuItem) => {
										const { menuTitle, pageURL } = menuItem;
										return (
											<MenuItem onClick={() => handleMenuClick(pageURL)}>
												{menuTitle}
											</MenuItem>
										);
									})}
								</Menu>
							</>
						) : (
							// displays menu items for logged in if not on a mobile device */
							<div className={classes.NavbarOptions}>
								{/* maps over logged out navbar items and displays them accordingly */}
								{menuItemsLoggedOut.map((menuItem) => {
									const { menuTitle, pageURL } = menuItem;
									return (
										<Button
											color="inherit"
											onClick={() => handleButtonClick(pageURL)}
										>
											{menuTitle}
										</Button>
									);
								})}
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
};

export default withRouter(Navbar);
