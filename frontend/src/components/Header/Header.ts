import React, { useState } from 'react';

const useHeader = () => {

    const isAuthenticated = false;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return {isAuthenticated, anchorEl, handleMenuOpen, handleMenuClose};
}

export default useHeader;