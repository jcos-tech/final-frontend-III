import Card from '../../components/Card/Card.jsx';
import { data } from '../../services/productList.js';

function Home({handleAddCart}) {

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {data.map((item) => (
                        <Card key={"product-" + item.id} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} handleAddCart={handleAddCart} />
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Home;