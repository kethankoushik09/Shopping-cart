import { cartSelector } from "../redux/cartSlice";
import { useSelector ,useDispatch} from "react-redux";
import { fetchproductsdata } from "../redux/cartSlice";
import { useEffect } from "react";
import Item from "./item";
export default function Home(){
    const {loading,products} = useSelector(cartSelector);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchproductsdata());
    },[])
    if(loading){
        return(<div class="loading-spinner"></div>)
    }

    return(
        <>
            <div>
                {products && products.length?
                    <div className="items-conatiner">
                        {products.map((item,idx)=>(
                            <Item key={idx} item = {item}/>
                        ))}
                    </div>:
                    null
                }

            </div>
        </>
    );
}