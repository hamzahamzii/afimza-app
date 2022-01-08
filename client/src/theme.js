import { deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFFF",
    },
  },
});

export default theme;
