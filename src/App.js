import {
  Button,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
  CssBaseline
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function App() {
  const theme = createTheme({
    spacing: 10,
    palette: {
      mode: "dark",
      // primary: {
      //   // main: orange[500]
      // }
      customRibRed: {
        main: red[400],
        superDark: red[800],
        superLight: red[100]
      }
    },
    typography: {
      myVariant: {
        fontSize: "2rem"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Typography variant="h3">Theming Example</Typography>
        <Typography
          variant="myVariant"
          sx={{ color: "customRibRed.superLight", m: 2, p: 2 }}
        >
          Hello CodeSandbox
        </Typography>
        <h3>Start editing to see some magic happen!</h3>
        <Button variant="contained" color="secondary">
          hi
        </Button>
      </div>
    </ThemeProvider>
  );
}
