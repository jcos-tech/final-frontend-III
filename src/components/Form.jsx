import { Link } from "react-router-dom";

function Form({ count }) {

    return (
        <form className="d-flex">
            <Link to="/cart" className="nav-link">
            <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
            </button>
            </Link>
           
        </form>
    );

}

export default Form;