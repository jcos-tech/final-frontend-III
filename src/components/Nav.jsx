import Ul from './Ul';
import Form from './Form';
import { Link } from 'react-router-dom';

function Nav({count}) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to="/" className="navbar-brand">Start Bootstrap</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Ul></Ul>
                    <Form count={count}></Form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;