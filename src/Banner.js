import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
        sx={{ alignSelf: "center", ml: 5 }}
      >
        Hidden Gems
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          alignSelf: "center",
          mr: 5,
          borderRadius: 8,
        }}
      >
        Login/Register
      </Button>
    </Box>
  );
};
export default Banner;
