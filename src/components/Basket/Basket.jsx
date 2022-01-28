import { BiCartAlt } from "react-icons/bi";
import { useSelector } from 'react-redux';
import "./Basket.scss";
import CountItemsInBasket from "../CountItemsInBasket/CountItemsInBasket";

function Basket() {

    const items = useSelector(state => state.cart.itemsInCart)
    
    return (
        <div className="basket-block">
            <CountItemsInBasket quantity={items.length}/>
            <BiCartAlt className="basket-block__icon" size={30}/>
        </div>
    )
}

export default Basket;