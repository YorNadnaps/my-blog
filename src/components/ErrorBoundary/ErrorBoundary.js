import React from 'react';
import styles from './ErrorBoundary.module.scss';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: '', errorInfo: '' };
    }

    componentDidCatch(error, errorInfo) {
        console.error('-------Error Found-------');
        console.error('>>> Error: ', error);
        console.error('>>> Error Info: ', errorInfo);

        this.setState({ error, errorInfo });
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            const { error, errorInfo } = this.state;
            return (
                <div className={styles.errorBoundary}>
                    <div>&gt;&gt;&gt; Error: {error}</div>
                    <div>&gt;&gt;&gt; Error Info: {errorInfo}</div>
                </div>
            )
        }

        return this.props.children;
    }
}