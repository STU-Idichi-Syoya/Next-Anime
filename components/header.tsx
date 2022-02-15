import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import GroupsIcon from '@mui/icons-material/Groups';
import FunctionsIcon from '@mui/icons-material/Functions';
import ArticleIcon from '@mui/icons-material/Article';

const pages = [{name:'研究室紹介',Link:'/introduction',icon:GroupsIcon}, {name:'画像処理',Link:'/tech',icon:FunctionsIcon}, {name:'BLOG',Link:'/blog',icon:ArticleIcon}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const logo_path='/iplab-logo.png';
const logo_width=50;

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
        <AppBar position="fixed" color='primary' sx={{height:'58px'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            flexDirection={'column'}
            align='center'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link href="/" >
                <div style={{textAlign:'center',display:'inline-block',}}>
                <img src={logo_path} width={logo_width} height={"auto"}/>
                </div>
            </Link>
            {/* GOAnime!! */}
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.Link}><a><Button startIcon={<page.icon/>}>{page.name}</Button></a></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
                        <Link href="/">
                <a>
                <img width={
                      logo_width} height={'auto'} src={logo_path}></img>
                </a>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            {pages.map((page) => (
              <div style={{marginLeft:10}} key={page.name}>
              <Link href={page.Link} key={page.name}>
                <a>
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                startIcon={<page.icon/>}
                sx={{ color: 'white', }}
                variant="outlined"
              >
                {page.name}
              </Button>
              </a></Link>
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
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
    <div styles={{marginBottom:'58px'}}></div>
    </>
  );
};
export default Header;