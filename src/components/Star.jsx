
function Star({ id_card, rating }) {

    const renderStars = () => {

        const stars = [];

        if (rating?.rate) {
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(rating.rate)) {
                    stars.push(<div key={"star-product-" + id_card + "-" + i} className={`bi-star-fill`}></div>);
                } else {
                    stars.push(<div key={"star-product-" + id_card + "-" + i} className={`bi-star`}></div>);
                }
            }
        }
        return stars;
    };

    return (
        <div className="d-flex justify-content-center small text-warning mb-2">
            {renderStars()}
        </div>
    );

}

export default Star;