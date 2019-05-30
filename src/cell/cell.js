import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

import news247logo from "../images/logo1.png";
import inGrlogo from "../images/logo2.png";
import sport24logo from "../images/logo3.png";

import { distanceInWordsToNow } from "date-fns";
import elLocale from "date-fns/locale/el";

const styles = theme => ({
	wrapper: {
		//marginBottom: "3rem",
		maxWidth: 600,
		[theme.breakpoints.up("xl")]: {
			maxWidth: 900
		},
		margin: "0 auto 3rem"
	},
	card: {
		width: "100%"
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	title: {
		fontSize: "1rem"
	},
	avatar: {
		backgroundColor: "white"
	}
});

const Cell = props => {
	const { classes, info } = props;

	return (
		<div className={classes.wrapper}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar
							aria-label="Site-icon"
							className={classes.avatar}
						>
							{info.site.includes("news247") && (
								<img
									src={news247logo}
									alt="logo"
									width="auto"
									height="23px"
								/>
							)}
							{info.site.includes("sport24") && (
								<img
									src={sport24logo}
									alt="logo"
									width="auto"
									height="23px"
								/>
							)}
							{info.site.includes("in.gr") && (
								<img
									src={inGrlogo}
									alt="logo"
									width="auto"
									height="23px"
								/>
							)}
						</Avatar>
					}
					// action={
					// 	<IconButton>
					// 		<MoreVertIcon />
					// 	</IconButton>
					// }
					title={info.title}
					classes={{ title: classes.title }}
					subheader={distanceInWordsToNow(
						info.time,
						{
							locale: elLocale
						},
						{ includeSeconds: true }
					)}
				/>
				<Link target="_blank" href={info.site} underline="none">
					<CardMedia className={classes.media} image={info.image} />
					<CardContent>
						<Typography component="p">{info.summary}</Typography>
					</CardContent>
				</Link>
			</Card>
		</div>
	);
};

export default withStyles(styles)(Cell);
