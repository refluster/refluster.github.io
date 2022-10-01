import React from 'react';
import Contents from './contents';
import NavBar from './navbar';

const Home: React.FC = () => {
    return (
        <div className="home">
            <NavBar />
            <Contents />
        </div>
    )
};

export default Home;
