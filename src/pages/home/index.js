import React, { useEffect } from 'react';
import { message, Button } from 'antd';
import photos1 from '_statics/imgs/01.png';
import photos2 from '_statics/imgs/02.jpg';
import '_less/home/index';

const Home = () => {
    useEffect(() => {}, []);
    const myAlert = () => {
        message.info('This is a normal message');
    };
    return (
        <div className="home">
            <h4>home</h4>
            <Button onClick={myAlert}>antd</Button>
            <br />
            <img src={photos1} width="100px" alt="图片" />
            <img src={photos2} width="100px" alt="图片" />
        </div>
    );
};

export default Home;
