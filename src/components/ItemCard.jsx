import { AiOutlineHeart } from 'react-icons/ai'
import Rating from 'react-star-rating-lite'

const ItemCard = ({ name, price, desc, category, image, rating, rate_count }) => {
    return (
        <div className='itemCard'>

            {/* <span><AiOutlineHeart color='red' size='2rem' /></span> */}

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
                    <p><strong>${price}</strong></p>
                </div>
                <button className='cardButton'><strong>Add To Cart</strong></button>
            </div>
        </div>
    )
}

export default ItemCard