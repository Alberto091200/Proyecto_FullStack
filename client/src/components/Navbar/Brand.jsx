import { NavLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import logo from '../../assets/GameAmen.png'

const imgUrl = new URL('./img.png', import.meta.url).href


function Brand() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ width: '70px', height: '70px' }} />
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
        to="/"
      >
        GameAmen
      </Typography>
    </Box>
  )
}

export default Brand;
