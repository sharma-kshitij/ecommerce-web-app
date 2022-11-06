import products from '../products.json'
import ItemCard from './ItemCard'

const Catalogue = () => {
    return (
        <div>
            {
                products.map(product => {
                    return (
                        <ItemCard
                            name={product.title}
                            price={product.price}
                            desc={product.description}
                            category={product.category}
                            image={product.image}
                            rating={product.rating.rate}
                            rate_count={product.rating.count}
                        />
                    )
                })
            }
        </div>
    )
}

export default Catalogue