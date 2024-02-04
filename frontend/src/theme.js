import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: ["none",
    '0px 3px 5px -1px rgba(0,0,0,0.2)',
    '0px 6px 10px 0px rgba(0,0,0,0.14)',
    '0px 3px 5px -1px rgba(0,0,0,0.2)',
    '0px 3px 5px -1px rgba(0,0,0,0.2)',
    '0px 6px 10px 0px rgba(0,0,0,0.14)',
    '0px 3px 5px -1px rgba(0,0,0,0.2)',
    '0px 3px 5px -1px rgba(0,0,0,0.2)',
    '0px 6px 10px 0px rgba(0,0,0,0.14)',
    '0px 3px 5px -1px rgba(0,0,0,0.2)'], // Добавлено значение для shadows[1]
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
