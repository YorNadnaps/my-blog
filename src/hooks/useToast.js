import React from 'react';
import { ToastContext } from '../components/Toast/Toast';

const useToast = () => {
    return React.useContext(ToastContext);
};

export default useToast;