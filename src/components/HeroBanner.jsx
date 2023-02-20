import { Typography, Box, Button } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" }
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Клуб фитнесса
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={1}
      >
        Потей, улыбайся <br /> и не стесняйся)
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out of the most popular exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercise
      </Button>
      <Typography fontWeight={600}
      color="#ff2625"
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
        }}
        fontSize="200px">
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="Баннер" className="hero-banner-img"/>
    </Box>
  );
};

export default HeroBanner;
