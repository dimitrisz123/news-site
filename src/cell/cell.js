import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

import { distanceInWords } from "date-fns";
import elLocale from "date-fns/locale/el";

const styles = theme => ({
	wrapper: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "3rem"
	},
	card: {
		maxWidth: 800
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	title: {
		fontSize: "1rem"
	}
});

const Cell = props => {
	const { classes, info } = props;
	return (
		<div className={classes.wrapper}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar aria-label="Recipe" className={classes.avatar}>
							R
						</Avatar>
					}
					// action={
					// 	<IconButton>
					// 		<MoreVertIcon />
					// 	</IconButton>
					// }
					title={info.title}
					classes={{ title: classes.title }}
					subheader={distanceInWords(
						new Date(info.time),
						new Date(),
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
