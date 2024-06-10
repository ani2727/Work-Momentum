import {Link} from "react-router-dom"
const Home = ()=>{
    return(
        <div>
        <Link to="/products" ><div>Products</div></Link>
        <Link to="/services" ><div>Services</div></Link>
        </div>
    )
}

export default Home;
