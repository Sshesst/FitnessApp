import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" }
        }}
        mb="50px"
        textAlign="center"
      >
        Упражнения которые ты <br /> должен знать
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "600", border: "none", borderRadius: "4px" }
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
