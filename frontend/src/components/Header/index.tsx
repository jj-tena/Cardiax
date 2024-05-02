import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderStyles from "./Header.styles";
import useHeader from "./Header";

const Header = () => {

    const {isAuthenticated, anchorEl, handleMenuOpen, handleMenuClose} = useHeader();

    return (
        <AppBar position="fixed" sx={HeaderStyles.main}>
            <Toolbar>
                <Typography variant="h4" sx={HeaderStyles.title}>
                    <a href="/" style={HeaderStyles.titleLink}>Cardiax</a>
                </Typography>
        
                <Box sx={HeaderStyles.options}>
                    {isAuthenticated ? (
                        <>
                            <Typography variant="h6">
                                <a href="/add-analytic" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticated}>Añadir analítica</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/analytics" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticated}>Ver analíticas</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/evolution" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticated}>Evolución</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/logout" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticated}>Logout</a>
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="h6" sx={HeaderStyles.optionsNoAuthenticatedSeparation}>
                                <a href="/login" style={HeaderStyles.optionsNoAuthenticated}>Login</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/register" style={HeaderStyles.optionsNoAuthenticated}>Registrarse</a>
                            </Typography>
                        </>
                    )}
                </Box>
        
                <Box sx={{ display: HeaderStyles.optionsMobile }}>
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
                                <a href="/add-analytic" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticatedMobile}>Añadir analítica</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/analytics" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticatedMobile}>Ver analíticas</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/evolution" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticatedMobile}>Evolución</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/logout" onClick={handleMenuClose} style={HeaderStyles.optionsAuthenticatedMobile}>Logout</a>
                            </Typography>
                        </>
                        ) : (
                        <>
                            <Typography variant="h6">
                                <a href="/login" onClick={handleMenuClose} style={HeaderStyles.optionsNoAuthenticatedMobile}>Login</a>
                            </Typography>
                            <Typography variant="h6">
                                <a href="/register" onClick={handleMenuClose} style={HeaderStyles.optionsNoAuthenticatedMobile}>Registrarse</a>
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