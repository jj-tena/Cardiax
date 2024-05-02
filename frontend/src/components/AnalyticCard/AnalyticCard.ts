import React, { useState } from 'react';

const useAnalyticCard = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return {open, handleOpen, handleClose};
}

export default useAnalyticCard;