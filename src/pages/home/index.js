import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setItemName } from '_store/actions/index';
import photos1 from '_statics/imgs/01.png';
import photos2 from '_statics/imgs/02.jpg';
import '_less/home/index';

const Home = (props) => {
    const { itemData } = props;
    const changeName = () => {
        console.log(props);
        props.setItemName({
            name: 'this is home page!!!',
        });
    };
    return (
        <div className="home">
            <h4>home</h4>
            <Button onClick={changeName}>setItemName</Button>

            <br />
            <br />

            {`redux-data: ${JSON.stringify(itemData)}`}

            <br />
            <br />

            <img src={photos1} width="100px" alt="图片" />
            <img src={photos2} width="100px" alt="图片" />
        </div>
    );
};

// 把store功能注入到props中
const mapToProps = {
    setItemName,
};

export default connect((state) => ({ itemData: state.getItem }), mapToProps)(Home);
