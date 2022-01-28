import "./BasketMenu.scss";
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from "../../redux/cart/reduser";
import { Button } from "../Button";

const BasketMenu = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)

    const handleClick = (movie) => (event) => {
        const isItemInCart = items.some(item => item.Title === movie)

        event.preventDefault();
        event.stopPropagation();
        if (isItemInCart) {
            
            dispatch(deleteItemFromCart(movie));
        }
    }

    const acceptOrder = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        
        <div className="basket-menu content">
            <div className="basket-menu__movies-list">
                {
                    items.length > 0 ? items.map((movie) => {
                        return (
                        <div key={movie.imdbID} className="basket-menu__item-container">
                            <p >{movie.Title}</p>
                            <Button
                                className="basket-menu__delete-button"
                                onClick={handleClick(movie.Title)}
                                children={"Удалить"}
                            />
                        </div>
                        )
                    }) : <p>Корзина пуста</p>
                }
            </div>
            {
                items.length > 0 ? 
                    <div className="basket-menu__arrange">
                        <Button
                            disabled={!sessionStorage.getItem("auth")}
                            className="basket-menu__button"
                            onClick={acceptOrder}
                            children={"Оформить заказ"}
                        /> 
                    </div>
                : null
            }
        </div>
    )
}

export default BasketMenu;