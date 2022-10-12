import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPokemon } from "../services/PokeFetch";
import { PokemonCard } from "./PokemonCard";
import { Search } from "./Search";

export const PokeApp = () => {
	const [searchedPokemon, setSearchedPokemon] = useState(null);
	const [textSearch, setTextSearch] = useState("");

	const handleSearch = (text) => {
		setTextSearch(text);
	};

	useEffect(() => {
		const pokemon = async () => {
			const appresponse = await getPokemon(textSearch);
			setSearchedPokemon(appresponse);
		};
		if (textSearch !== "") {
			pokemon();
		} else {
			setSearchedPokemon(null);
		}
	}, [textSearch]);

	return (
		<>
			<Container sx={{ backgroundColor: "#F3f3f3" }}>
				<Grid
					container
					spacing={2}
					sx={{
						widht: "800px",
						height: "600px",
						marginTop: "20px",
					}}
				>
					<Grid item sx={{ width: "100%" }}>
						<Search onSearch={handleSearch}></Search>
					</Grid>
					<Grid item xs={9}>
						{searchedPokemon && <PokemonCard valuePokemon={searchedPokemon} />}
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
