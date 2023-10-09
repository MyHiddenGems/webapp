import { Box, Divider, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Banner from "./Banner";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <Container sx={{ width: "100%" }}>
      <Banner />
      <Divider
        sx={{ borderBottomWidth: 3 }}
      />
      <Grid container sx={{ mt: 8 }}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={3} />
        <Grid container spacing={8} sx={{ mt: 8 }}>
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 300,
                backgroundColor: (theme) => theme.palette.secondary.light,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 300,
                backgroundColor: (theme) => theme.palette.secondary.light,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 300,
                backgroundColor: (theme) => theme.palette.secondary.light,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} sx={{ mt: 8 }}>
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 300,
                backgroundColor: (theme) => theme.palette.secondary.light,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 300,
                backgroundColor: (theme) => theme.palette.secondary.light,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 300,
                backgroundColor: (theme) => theme.palette.secondary.light,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
