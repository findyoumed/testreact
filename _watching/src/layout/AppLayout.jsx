import React, { useState } from 'react'
import { styled, alpha, ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, Outlet } from 'react-router-dom';
import watchinglogo from '../assets/watching.png';
import { useNavigate } from 'react-router-dom';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';

const pages = ['home', 'movies'];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AppLayout = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  textDecoration: 'none',
                }}
              >
                <img src={watchinglogo} alt="watching" height="65" />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page}
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to={page === 'home' ? '/' : `${page}`}>
                      <Typography sx={{ textAlign: 'center' }}>{page.toUpperCase()}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                }}
              >
                <img src={watchinglogo} alt="watching" height="65" />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    component={Link}
                    to={page === 'home' ? '/' : `${page}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box 
                component="form" 
                sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}
                onSubmit={searchByKeyword}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    value={keyword}
                    onChange={(event)=>setKeyword(event.target.value)}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Button variant="outlined" color="error" sx={{ ml: 1 }} type="submit">
                  Search
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Fab 
          sx={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 9999,
            opacity: 0.4,
            transition: "all 0.2s ease-in-out" ,
            '&:hover' : {
              opacity: 1,
            }
          }} 
          aria-label="scroll to top" 
          size="small" 
          color="inherit"
          href="#"
        >
          <UpIcon />
        </Fab>
        <Outlet />
      </ThemeProvider>
    </div>

  );
}

export default AppLayout
