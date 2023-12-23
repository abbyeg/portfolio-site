import { useState, useEffect } from 'react';

const GlowingCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <div 
            id="cursor-glow" 
            style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px` 
            }} 
        />
    );
};

export default GlowingCursor;
