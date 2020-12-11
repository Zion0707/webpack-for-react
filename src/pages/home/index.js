import React, { useEffect } from 'react';
import { Button } from 'antd';
import photos from '_statics/imgs/03.jpg';
import '_less/home/index';

const Home = () => {
    useEffect(() => {}, []);
    return (
        <div className="home">
            home
            <Button>按钮</Button>
            <img src={photos} width="100px" alt="图片" />
        </div>
    );
};

export default Home;
