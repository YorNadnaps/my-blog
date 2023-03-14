import React from 'react';

const useTimeout = (callback, delay) => {
    const savedCallback = React.useRef(callback);

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        if (delay === null) {
            return;
        }

        const id = setTimeout(() => savedCallback.current(), delay);

        return () => clearTimeout(id);
    }, [delay]);
};

export default useTimeout;