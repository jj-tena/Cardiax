const HeaderStyles = {
    main: { width: '100%', top: 0, bgcolor: 'black', marginBottom: '350px' },
    title: { flexGrow: 1},
    titleLink: { textDecoration: 'none', display: 'block', color: 'white'},
    options: { display: { xs: 'none', sm: 'flex' } },
    optionsAuthenticated: { textDecoration: 'none', color: 'white', display: 'block', padding: '8px 16px' },
    optionsNoAuthenticatedSeparation: { mr: 4 },
    optionsNoAuthenticated: { textDecoration: 'none', color: 'white' },
    optionsMobile: { xs: 'flex', sm: 'none' },
    optionsAuthenticatedMobile: { textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' },
    optionsNoAuthenticatedMobile: { textDecoration: 'none', color: 'black', display: 'block', padding: '8px 16px' }
}

export default HeaderStyles;
