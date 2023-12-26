import { useContext } from "react";
import {ProductsContext} from "../context/ProductsContext";
function ProductsList(props){
    const products = useContext(ProductsContext);
    return(
    <div className="product-list">
     {products.map((product) =>( <h1 key={product.id}>{product.title}</h1> 
        ))}
    </div>
);
}
export default ProductsList;