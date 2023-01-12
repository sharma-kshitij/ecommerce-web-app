import { useContext } from 'react';
import CatalogueSort from './CatalogueSort';
import ItemCard from './ItemCard';
import itemListContext from '../App'
import NotFoundComponent from './NotFoundComponent';

const Catalogue = (props) => {
    // const itemList = useContext(itemListContext);

    return (
        <div>
            <CatalogueSort />
            <div className='cardFlex'>
                {   props.itemList.length === 0 
                    ? 
                        <NotFoundComponent />
                    :
                    props.itemList.map(product => {
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