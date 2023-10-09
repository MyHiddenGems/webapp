import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchTwoTone from "@mui/icons-material/SearchTwoTone";

const SearchBar = () => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel>
        Search
      </InputLabel>
      <OutlinedInput
        sx={{
          borderRadius: 8,
          boxShadow: 3,
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              onClick={() => console.log("Hello world")}
              edge="end"
            >
              <SearchTwoTone />
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};
export default SearchBar;
