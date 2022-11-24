import products from '../products.json'
import CatalogueSort from './CatalogueSort'
import ItemCard from './ItemCard'

const Catalogue = () => {
    return (
        <div>
            <CatalogueSort />
            <div className='cardFlex'>
                {
                    products.map(product => {
                        return (
                            <ItemCard
                                key={product.id}
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
        </div>
    )
}

export default Catalogue