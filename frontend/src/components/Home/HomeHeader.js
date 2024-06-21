import "./Home.css"
import {Link} from "react-router-dom"
const HomeHeader = ()=>{
    return(
        <div className="home-header">
            <div className='home-body-text'>
            <h1>Your Vision, Our Innovation</h1>
            <p>Transforming your ideas into cutting-edge digital solutions. Together, we drive progress and shape the future of technology.</p>
            <div>
                <Link to='/contact-us'><button>Let's Connect</button></Link>
                </div>
            </div>
                
        </div>
    )
}

export default HomeHeader;