import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setGlobalList } from '_store/actions/index';
import '_less/list/index';

const List = (props) => {
    const { itemData } = props;
    const changeList = () => {
        console.log(props);

        const { list } = itemData;
        list.push({
            time: Date.parse(new Date()),
        });
        props.setGlobalList({
            list,
        });
    };
    return (
        <div className="list">
            list
            <br />
            <br />
            {`redux-data: ${JSON.stringify(itemData)}`}
            <br />
            <br />
            <Button onClick={changeList}>setGlobalList</Button>
        </div>
    );
};

// 把store功能注入到props中
const mapToProps = {
    setGlobalList,
};

export default connect((state) => ({ itemData: state.getGlobalData }), mapToProps)(List);
