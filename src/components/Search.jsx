import { Grid, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

export const Search = ({ onSearch }) => {
	const [valueInput, setValueInput] = useState("");

	const onHandleChange = (event) => {
		const inputValue = event.target.value;
		setValueInput(inputValue);
	};
	const onHandleSubmit = () => {
		onSearch(valueInput);
	};

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<TextField
						fullWidth
						label="Buscar Pokemon"
						value={valueInput}
						onChange={onHandleChange}
					></TextField>
				</Grid>
				<Grid item xs={2} sx={{ padding: "0px" }}>
					<IconButton onClick={onHandleSubmit}>
						<SearchIcon sx={{ height: "40px", width: "40px" }}></SearchIcon>
					</IconButton>
				</Grid>
			</Grid>
		</>
	);
};
