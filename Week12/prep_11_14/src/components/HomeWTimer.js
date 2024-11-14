import React, { useEffect, useState } from 'react';

const HomeWTimer = () => {
    const [data, setData] = useState(null);

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setData('This is the Home component!');
        }, 2000);  // 2-second delay

        // Cleanup timer
        return () => clearTimeout(timer);
    }, []);

    return <div>{data }</div>;
};

export default HomeWTimer;
