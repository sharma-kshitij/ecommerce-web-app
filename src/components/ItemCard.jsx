import { useContext } from 'react'
import Rating from 'react-star-rating-lite'
import { GlobalContext } from '../GlobalContext'
import { ACTIONS } from '../reducer'

const ItemCard = ({ name, price, desc, category, image, rating, rate_count }) => {

    const [state, dispatch] = useContext(GlobalContext)

    const addToCart = () => {
        dispatch({
            type: ACTIONS.test,
            payload: { name, price, desc, category, image, rating, rate_count }
        })
        console.log(state)
    }

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
                <button onClick={() => addToCart()} className='cardButton'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ItemCard