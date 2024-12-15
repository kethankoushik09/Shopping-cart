import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./style.css"
export default function Nav(){
    return(
        <>
            <div className="nav-container">
                <div className="cart-name-heading">
                    <h3>REACT REDUX SHOPPING CART</h3>
                </div>
                <ul className="pages-list">
                    <NavLink to="/" 
                        style={({isActive})=>({
                            color:isActive?"skyblue":"black"
                        })}
                    >
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="cart" 
                        style={({isActive})=>({
                            color:isActive?"skyblue":"black"
                        })}
                    >
                        <li>Cart</li>
                    </NavLink>
                </ul>
            </div>
            <Outlet/>
        </>
    );
}