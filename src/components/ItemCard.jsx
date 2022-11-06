import Rating from 'react-star-rating-lite'

const ItemCard = ({ name, price, desc, category, image, rating, rate_count }) => {
    return (
        <div className='itemCard'>
            <img src={image} alt="" />
            <p className='itemName' >{name}</p>
            <div className='cardRating'>
                <Rating
                    value={rating}
                    weight="20"
                    readonly
                />
                {
                    <p>({rate_count})</p>
                }
            </div>
            <div className="bottomSection">
                <div className="itemPrice">
                    <p className='priceTag'>Price</p>
                    <p>${price}</p>
                </div>
                <button className='cardButton'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ItemCard