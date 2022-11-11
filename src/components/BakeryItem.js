// TODO: create a component that displays a single bakery item

function BakeryItem(props) {
    return (
    <div className="BakeryItem">
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <p>Price: {props.item.price}</p>
        <img src={props.item.image}/>
        <button onClick={() => {props.addToCart(props.item)}}>Add to cart</button>
        
    </div>)
    
}

export default BakeryItem;
