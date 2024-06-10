import {Link} from "react-router-dom"
const Home = ()=>{
    return(
        <Link to="/products" ><div>Products</div></Link>
        <link to="/services" ><div>Services</div></Link>
    )
}

export default Home;
