import { useSelector } from "react-redux";
import { cartSelector } from "../redux/cartSlice";
import Item from "./item";
export default function Cart(){
    const {cart} = useSelector(cartSelector);
    function totalpriceofcart(){
        const total = cart.reduce((acc,item)=>{
            acc+=item.price
            return acc;
        },0)
        return total;
    }
    if(!cart.length){
        return(<h3>No items are thre in cart</h3>)
    }
    return(
        <>
            <div className="cart-items-conatiner">
                {cart.map((item,idx)=>(
                    <Item key={idx} item = {item}/>
                ))}
            </div>
            <div className="cart-details-section">
                <h3>your cart summary</h3>
                <h4>No.of items: {cart.length}</h4>
                <h4>Total price: {Math.round(totalpriceofcart())} $</h4>


            </div>
        </>
    );
}