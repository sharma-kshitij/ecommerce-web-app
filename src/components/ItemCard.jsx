// import Rating from 'react-star-rating-lite'

const ItemCard = ({ name, price, desc, category, image, rating, rate_count }) => {
    return (
        <div className='itemCard'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p className='cardRating'>
                {/* <Rating
                    value={rating}
                    readonly
                /> */}
                ({
                    <p>rate_count</p>
                })
            </p>
            <p>Price : ${price}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default ItemCard