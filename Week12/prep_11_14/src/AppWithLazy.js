import React, { Suspense, useState } from "react";

// Dynamically import components
const HomeWTimer = React.lazy(() => import("./components/HomeWTimer"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

const AppWithLazy = () => {
    const [showAbout, setShowAbout] = useState(false);
    return (
        <div>
            <h1>React Suspense Demo</h1>
            <button onClick={() => setShowAbout(true)}>Load About</button>

            <Suspense fallback={<div>Loading...</div>}>
                {/* Lazy loading of HomeWTimer */}
                <HomeWTimer />
                {/* Lazy loading of About only if the button is clicked */}
                {showAbout && <About />}
            </Suspense>
        </div>
    );
};
export default AppWithLazy;