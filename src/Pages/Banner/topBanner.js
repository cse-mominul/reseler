import React from 'react';

const TopBanner = () => {
    return (
        <div className="hero lg:min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/Gc2PMzh/Fusion-by-arthwork-idownloadblog-wallpaper-mock-up.webp")` }}>
            <div className="hero"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Best Mobile Phone For you</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;