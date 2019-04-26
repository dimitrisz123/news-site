import React from "react";
import news247logo from "../images/logo1.png";
import inGrlogo from "../images/logo2.png";
import sport24logo from "../images/logo3.png";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Articles from "../articles";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3
	}
});

class ResponsiveDrawer extends React.Component {
	state = {
		mobileOpen: false,
		site: ""
	};

	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	render() {
		const { classes, theme } = this.props;
		const { site } = this.state;

		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{["in.gr", "sport24", "news247"].map((text, index) => (
						<ListItem
							button
							key={text}
							onClick={() => {
								this.setState({
									site: text,
									mobileOpen: false
								});
							}}
						>
							{index === 0 && (
								<img
									src={inGrlogo}
									alt="logo"
									width="auto"
									height="20px"
								/>
							)}

							{index === 1 && (
								<img
									src={sport24logo}
									alt="logo"
									width="auto"
									height="20px"
								/>
							)}
							{index === 2 && (
								<img
									src={news247logo}
									alt="logo"
									width="auto"
									height="20px"
								/>
							)}

							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<img
								src={inGrlogo}
								alt="logo"
								width="auto"
								height="20px"
							/>

							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Responsive drawer
						</Typography>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							container={this.props.container}
							variant="temporary"
							anchor={
								theme.direction === "rtl" ? "right" : "left"
							}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Articles site={site} />
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);