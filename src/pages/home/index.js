import React, { useEffect } from 'react';
import photo from '_statics/imgs/02.jpg';
import '_less/home/index';

const Home = () => {
    useEffect(() => {}, []);
    return (
        <div className="home">
            home
            <br />
            <img src={photo} alt="图片" />
        </div>
    );
};

export default Home;
