import React from 'react';
import { createPortal } from 'react-dom';
import useTimeout from '../../hooks/useTimeout';
import styles from './Toast.module.scss';

const TOAST_TIMEOUT = 3000;

export const ToastContext = React.createContext();

export const ToastProvider = (props) => {
    const counter = React.useRef(0);
    const [toasts, setToasts] = React.useState([]);

    const showToast = (content) => {
        setToasts((prevToasts) => {
            return [
                ...prevToasts,
                {
                    id: counter.current,
                    content
                }
            ];
        });
        counter.current++;
    };

    const removeToast = (id) => {
        const filteredToasts = toasts.filter(toast => toast.id !== id);
        setToasts(() => {
            return [...filteredToasts];
        });
    };

    const contextValue = React.useMemo(() => ({ showToast }), []);
    return (
        <ToastContext.Provider value={contextValue}>
            {props.children}
            {createPortal(
                <div className={styles.toastContainer}>
                    {toasts.map(toast => (
                        <Toast key={toast.id} closeToast={() => removeToast(toast.id)}>
                            {toast.content}
                        </Toast>
                    ))}
                </div>,
                document.getElementById('modal-root')
            )}
        </ToastContext.Provider>
    )
};

const Toast = (props) => {
    useTimeout(props.closeToast, TOAST_TIMEOUT);

    return (
        <div className={styles.toast}>
            <div className={styles.toast__text}>{props.children}</div>
            <button onClick={props.closeToast} className={styles.close__toast}>X</button>
        </div>
    );

};