import React from 'react';

const useTitle = function (title) {
    const documentDefined = document !== undefined;
    const actualTitle = React.useRef(documentDefined? document.title : null);

    React.useEffect(() => {
        const originalTitle = actualTitle.current;
        if (!documentDefined) {
            return;
        }

        if (document.title !== title) {
            document.title = title;
        }

        return () => {
            document.title = originalTitle;
        }
    }, [documentDefined, title]);
};

export default useTitle;