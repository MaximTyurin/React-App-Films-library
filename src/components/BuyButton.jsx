import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart } from '../redux/cart/reduser';
import Button from './Button';

const BuyButton = (movie) => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.imdbID === movie.movie.imdbID)

    const handleClick = (event) => {
        event.stopPropagation();
        if (!isItemInCart) {
            dispatch(setItemInCart(movie.movie));
        }
    }

    return (
        <Button onClick={handleClick}>В Корзину</Button>
    )
}

export default BuyButton;