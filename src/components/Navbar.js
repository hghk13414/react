import { useContext } from "react";
import {ProductsContext} from "../context/ProductsContext";
function Navbar(props){
    const value = useContext(ProductsContext);
return(
<div className="Navbar">
    <h1>products count: {value.length}</h1>
</div>
)
}
export default Navbar;