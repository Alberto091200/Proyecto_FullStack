import { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Button,
  Tooltip,
} from '@mui/material'
import { useAuth } from 'hooks'
import { stringAvatar } from './helpers'
import Brand from './Brand'
import { Menu, CollapseMenu } from '../../components'
import SearchBar from '../SearchBar/SearchBar'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const [user] = useAuth()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = event => setAnchorElNav(event.currentTarget)
  const handleOpenUserMenu = event => setAnchorElUser(event.currentTarget)


  let optionsUserMenu = [{ label: 'Product', to: '/products' }]


  optionsUserMenu = user.auth
    ? [...optionsUserMenu, { label: 'Logout', to: '/logout' }]
    : [
      ...optionsUserMenu,
        { label: 'Login', to: '/login' },
        { label: 'Register', to: '/register' },
      ]

  return (
    <AppBar sx ={{backgroundColor:"#311178", opacity:'0.95'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Brand />
          <SearchBar      />
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  {...stringAvatar(
                    !user.auth
                      ? 'John Doe'
                      : user.username.toUpperCase() + ' ' + 'V'
                  )}
                />
              </IconButton>
            </Tooltip>
            <CollapseMenu
              anchor={anchorElUser}
              onClose={() => setAnchorElUser(null)}
              options={optionsUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
