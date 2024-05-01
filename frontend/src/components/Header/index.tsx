import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderStyles from "./Header.styles";
import useHeader from "./Header";

const Header = () => {

    const {isAuthenticated, anchorEl, handleMenuOpen, handleMenuClose} = useHeader();

    return (
        <AppBar position="fixed" sx={{ width: '100%', top: 0, bgcolor: 'black', marginBottom: '350px' }}>
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1}}>
                    <a href="/" style={{ textDecoration: 'none', display: 'block', color: 'white'}}>Cardiax</a>
                </Typography>
        
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {isAuthenticated ? (
                        <>
                            <Typography variant="h6">
                                <a href="/add-analytic" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '8px 16px' }}>Añadir analítica</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/analytics" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '8px 16px' }}>Ver analíticas</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/evolution" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '8px 16px' }}>Evolución</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/logout" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '8px 16px' }}>Logout</a>
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="h6" sx={{ mr: 4 }}>
                                <a href="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/register" style={{ textDecoration: 'none', color: 'white' }}>Registrarse</a>
                            </Typography>
                        </>
                    )}
                </Box>
        
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton size="large" color="inherit" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {isAuthenticated ? (
                        <>
                            <Typography variant="h6">
                                <a href="/add-analytic" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' }}>Añadir analítica</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/analytics" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' }}>Ver analíticas</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/evolution" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' }}>Evolución</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/logout" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' }}>Logout</a>
                            </Typography>
                        </>
                        ) : (
                        <>
                            <Typography variant="h6">
                                <a href="/login" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' }}>Login</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/register" onClick={handleMenuClose} style={{ textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' }}>Registrarse</a>
                            </Typography>
                        </>
                        )}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
      );
};

export default Header;