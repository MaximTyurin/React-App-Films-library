import "./CountItemsInBasket.scss";

function CountItemsInBasket({quantity = 0}) {
    return (
        quantity > 0 ?
        <div className="items-in-basket">
            {quantity}
        </div> 
        : null
    )
}

export default CountItemsInBasket