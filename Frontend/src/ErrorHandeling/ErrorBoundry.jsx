import React from "react";
import PropTypes from 'prop-types';
import '../ErrorHandeling/ErrorBoundry.css'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        // Optionally re-attempt the operation that caused the error
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="containerr">
                    <div style={{backgroundColor:'rgba(61, 61, 61, 0.5)'}} className="alert" role="alert">
                        <h4 className="alert-heading">Something went wrong.</h4>
                        <p style={{ color: 'white' }} className="mb-0">An unexpected error has occurred. Please try again later.</p>
                        <hr />
                        <button className="btn btn-primary" onClick={this.handleRetry}>Try again</button>
                        {this.state.error && (
                            <div className="mt-4">
                                <h5>Error Details:</h5>
                                <p style={{ color: 'white' }}><strong style={{ color: 'white' }}>Message:</strong> {this.state.error.toString()}</p>
                                {this.state.errorInfo && (
                                    <details style={{ whiteSpace: 'pre-wrap' }}>
                                        {this.state.errorInfo.componentStack}
                                    </details>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
