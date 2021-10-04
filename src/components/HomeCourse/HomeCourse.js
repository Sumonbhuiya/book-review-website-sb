import React from 'react';

const HomeCourse = (props) => {
    const { key } = props.service;
    return (
        <div>
            <h2>{key}</h2>
        </div>
    );
};

export default HomeCourse;