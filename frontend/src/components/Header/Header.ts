import { useAuth } from 'context/AuthContext';
import React, { useState } from 'react';

const useHeader = () => {

    const { isAuthenticated } = useAuth();

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