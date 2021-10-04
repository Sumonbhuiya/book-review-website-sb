import React from 'react';

const HomeCourse = (props) => {
    const { key } = props.service;
    return (
        // home page courses show 
        <div>
            <h2>{key}</h2>
        </div>
    );
};

export default HomeCourse;