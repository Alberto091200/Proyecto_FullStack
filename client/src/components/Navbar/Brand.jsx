import { NavLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";

function Brand() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M4 19H20V20H4V19Z" fill="white" />
        <path d="M4 4V10C4.005 10.732 4.401 11.37 4.991 11.715L5 18H14V13H17V18H19V11.72C19.599 11.37 19.995 10.732 20 10.001V4H4V4ZM8 6H10V10C10 10.552 9.552 11 9 11C8.448 11 8 10.552 8 10V6ZM6 11C5.448 11 5 10.552 5 10V6H7V10C7 10.552 6.552 11 6 11ZM12 16H7V13H12V16ZM13 10C13 10.552 12.552 11 12 11C11.448 11 11 10.552 11 10V6H13V10ZM16 10C16 10.552 15.552 11 15 11C14.448 11 14 10.552 14 10V6H16V10ZM19 10C19 10.552 18.552 11 18 11C17.448 11 17 10.552 17 10V6H19V10Z" fill="white" />
      </svg>
      <Typography
        variant="h6"
        noWrap
        component={NavLink}
        sx={{
          marginLeft: '10px',
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "inherit",
          textDecoration: "none",
        }}
        to="/products"
      >
        ENTITY
      </Typography>
    </Box>
  );
}

export default Brand;
