import React from 'react';
import { useNavigate } from 'react-router-dom';

const RouterHOC = (Component) => {
    const HOC = (props) => {
        const navigate = useNavigate();
        return <Component {...props} router={{ navigate }} />
    }
    return HOC;
};

export default RouterHOC;