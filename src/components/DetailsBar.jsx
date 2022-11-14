import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

const DetailsBar = () => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
            return { innerWidth, innerHeight };
    }

    return (
        <div className ={ windowSize.innerWidth < 816 ? 'sidebarHidden' :'detailsbarDiv detailsbarBorder'}>DetailsBar</div>
    )
}

export default DetailsBar