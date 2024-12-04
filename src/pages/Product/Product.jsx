import { useParams } from 'react-router-dom';
import { ProductHooks } from '../../hooks/ProductHooks';
import './Product.css';

function Product({ handleAddCart }) {

    const params = useParams();
    const { product, handleCount } = ProductHooks(params.id);

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" src={product?.image ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIuyhIU_4sTcggWqJptRxBJ6o4YnqXqTr3A&s"} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1"> Quantity: {handleCount(params.id, product?.rating?.count ?? 0)}</div>
                        <h1 className="display-5 fw-bolder">{product.title}</h1>
                        <div className="fs-5 mb-5">
                            <span>$ {product?.price ?? 0}</span>
                        </div>
                        <p className="lead">{product?.description ?? ""}</p>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => { handleAddCart(params.id); }}>
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;
