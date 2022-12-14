import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

export const PokemonCard = ({ valuePokemon }) => {
	const { img, name } = valuePokemon;

	const capitalize = (text) => {
		// const splitted = text.split("");
		// return splitted[0].toUpperCase() + splitted.slice(1).join("");
		return text.substring(0, 1).toUpperCase() + text.substring(1);
	};

	return (
		<>
			<Grid container>
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						component="img"
						alt={name}
						height="140"
						image={img}
						sx={{ marginTop: "10px", objectFit: "contain" }}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{capitalize(name)}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};
