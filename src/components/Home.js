import {Link} from "react-router-dom"
const Home = ()=>{
    return(
        <Link to="/products" ><div>Products</div></Link>
        <Link to="/services" ><div>Services</div></Link>
    )
}

export default Home;
