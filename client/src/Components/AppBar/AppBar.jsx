import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider } from '@mui/material/';

const settings = ['Orders', 'Logout'];

function navBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx ={{backgroundColor:"#311178", opacity:'0.9'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
              <path d="M4 19H20V20H4V19Z" fill="white" />
              <path d="M4 4V10C4.005 10.732 4.401 11.37 4.991 11.715L5 18H14V13H17V18H19V11.72C19.599 11.37 19.995 10.732 20 10.001V4H4V4ZM8 6H10V10C10 10.552 9.552 11 9 11C8.448 11 8 10.552 8 10V6ZM6 11C5.448 11 5 10.552 5 10V6H7V10C7 10.552 6.552 11 6 11ZM12 16H7V13H12V16ZM13 10C13 10.552 12.552 11 12 11C11.448 11 11 10.552 11 10V6H13V10ZM16 10C16 10.552 15.552 11 15 11C14.448 11 14 10.552 14 10V6H16V10ZM19 10C19 10.552 18.552 11 18 11C17.448 11 17 10.552 17 10V6H19V10Z" fill="white" />
            </svg>


            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ENTITY
            </Typography>
          </Box>

          <div style={{ marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
              <InputBase
                placeholder="Search..."
                startAdornment={<SearchIcon />}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '25px',
                  padding: '8px',
                  width:'100%',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  },
                }}
              />
            </div>

          <Box sx={{ display: 'flex' }}>
            <IconButton color="inherit">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: 'white', marginX: 2 }}
            />

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default navBar
