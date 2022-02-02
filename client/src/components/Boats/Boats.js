import React from 'react';
import Boat from './Boat/Boat';
import useStyles from './styles';

const Boats = () => {
    const classes = useStyles();
    return (
    <>
        <h1>Posts</h1>
        <Boat />
        <Boat />
        </>
    );
}

export default Boats;