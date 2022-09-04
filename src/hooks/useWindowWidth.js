import { useState, useEffect } from 'react';

const getWidth = () => window.innerWidth;

export default function useWindowWidth() {
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        let timeoutId = null;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}
