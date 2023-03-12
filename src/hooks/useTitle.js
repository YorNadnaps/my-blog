import React from 'react';

const useTitle = function (pageTitle) {
    React.useEffect(() => {
        if (pageTitle) {
            const prevTitle = document.title;
            document.title = pageTitle;

            return () => {
                document.title = prevTitle;
            };
        }
    }, [pageTitle]);
};

export default useTitle;