import { Link } from 'react-router-dom';
import'./Page404.css';

function Page404() {

    return (
        <div className="error-container">
        <div className="lottie-animation"></div>
        <div className="error-content">
          <h1>404</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Go to Homepage</Link>
        </div>
      </div>
    );

}

export default Page404;