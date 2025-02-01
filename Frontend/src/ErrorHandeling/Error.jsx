export default function Error({ message, stack }) {
    return (
        <div className="containerr">
            <div style={{backgroundColor:'rgba(61, 61, 61, 0.5)'}} className="alert" role="alert">
                <h4 className="alert-heading">Something went wrong.</h4>
                <p style={{ color: 'white' }} className="mb-0">An unexpected error has occurred. Please try again later.</p>
                <hr />
                <div className="mt-4">
                    <h5>Error Details:</h5>
                    <p style={{ color: 'white' }}><strong style={{ color: 'white' }}>Message:</strong> {message}</p>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {stack}
                    </details>
                </div>
            </div>
        </div>
    );
}