import { useSelector } from "react-redux"
import { cartSelector } from "../redux/cartSlice"
import { addcart,delcart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
export default function Item({item}){
    const {cart} = useSelector(cartSelector);
    const dispatch = useDispatch();

    function containscart(currentid){
        const index = cart.findIndex((item)=>item.id === currentid);
        return (index !== -1);
    }
    function handlecartdata(id){
        if (containscart(id)) {
            dispatch(delcart(id)); // If item is in the cart, remove it
        } else {
            dispatch(addcart(item)); // If item is not in the cart, add it
        }
    }

    return(
        <div className="item-wrapper">
            <div className="item-image">
                <img src={item.image} alt="img"/>
            </div>
            <div className="item-content">
                <p>{item.title}</p>
                <button onClick={()=>handlecartdata(item.id)}>
                    {containscart(item.id)?"remove from cart":"Add to cart"}
                </button>
            </div>
        </div>
    )
}