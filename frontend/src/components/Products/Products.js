import "./Products.css"
import {Link} from "react-router-dom"
import StatisticsTechStack from "../Statistics/StatisticsTechStack";
const Products = ()=>{
    return (
        <div className='products'>
            <div className="products-banner-image">
                <div className='products-header'>
                    <h1>One Click Devops</h1>
                    <h2>Your seamless devops Ecosystem</h2>
                </div>
                <div className='products-description'>
                    Welcome to One Click DevOps, the ultimate solution for all your DevOps needs. 
                    Our product is designed to streamline your entire development and deployment 
                    process, ensuring rapid and efficient delivery of your software projects. 
                </div>
            </div>
            <div>
                <div className='products-offer-header'><h1 style={{fontSize:'2.5em',marginTop:'-1em'}}>What We Offer</h1></div>
                <div className='products-offer'>
                        <div className='products-offer-card'>
                            <div className="products-offer-card-header">
                                <h2>Comprehensive DevOps Ecosystem</h2>
                                <img src='https://i.postimg.cc/5yxy9v6N/image.png' alt=''></img>
                            </div>
                            <p style={{fontSize:'20px'}}>We integrate a robust set of DevOps tools and cloud providers, 
                            ensuring you have everything you need at your fingertips.</p>
                        </div>
                        <div className='products-offer-card'>
                            <div className="products-offer-card-header">
                                <h2>Seamless CI/CD Flows</h2>
                                <img src='https://cdn0.iconfinder.com/data/icons/agile-basic-2-filled-outline/468/Layer45-64.png' alt=''></img>
                            </div>
                            <p style={{fontSize:'20px'}}> Develop and manage continuous integration and continuous deployment pipelines effortlessly.</p>
                        </div>
                        <div className='products-offer-card'>
                            <div className="products-offer-card-header">
                            <h2>Rapid Deployment</h2>
                            <img src="https://i.postimg.cc/mDNMSCq7/image.png" alt="" ></img>
                            </div>
                            <p style={{fontSize:'20px'}}>With just one click, deploy your applications swiftly and reliably.</p>
                        </div>
                </div>
            </div>
            <div className='tech-stack'>
                <h1>Our Technology Stack</h1>
                <StatisticsTechStack/>
            </div>
            <div className="why-devops">
            <h1>Why Choose One Click DevOps</h1>
            <div className="why-devops-card animate__animated animate__fadeInUp">
                <div className="why-devops-header">
                    <h3>Efficiency</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqlAmo75nvWc2JyDd6_XPx5FhEiLSqoWHQA&s" alt='' />
                </div>
                <p style={{fontSize:'20px'}}>Save time with automated workflows and rapid deployment</p>
            </div>
            <div className="why-devops-card animate__animated animate__fadeInUp animate__delay-1s">
            <div className="why-devops-header">
                    <h3>Reliability</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZ6ODQS423lWxGTeN67mJ3iSupjn1UP3wkg&usqp=CAU" alt='' />
                </div>
                <p style={{fontSize:'20px'}}>Ensure consistent and reliable releases with our integrated toolset</p>
            </div>
            <div className="why-devops-card animate__animated animate__fadeInUp animate__delay-2s">
                <div className="why-devops-header">
                    <h3>Flexibility</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1f_ZpVVpnCXHJdoDROXFHEO3yrFMV9eSYQ&usqp=CAU" alt='' />
                </div>
                <p style={{fontSize:'20px'}}>Use the cloud providers and tools you're already familiar with</p>
            </div>
            <div className="why-devops-card animate__animated animate__fadeInUp animate__delay-3s">
            <div className="why-devops-header">
                    <h3>Scalability</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LgYbPgzmUGhLWd66QrrFAihCEFTjxIrq1XcDER8cu6PT9N3fLDiDMk0z4kGUrq40cfA&usqp=CAU" alt='' />
                </div>
                <p style={{fontSize:'20px'}}>Scale your infrastructure seamlessly as your needs grow</p>
            </div>
            <div className="why-devops-card animate__animated animate__fadeInUp animate__delay-4s">
            <div className="why-devops-header">
                    <h3>Security</h3>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/022/347/551/small_2x/technology-security-shield-logo-3d-icon-of-checkmark-vpn-symbol-digital-authentication-and-proxy-server-connection-illustration-virtual-private-network-password-protection-free-vector.jpg" alt='' />
                </div>
                <p style={{fontSize:'20px'}}>Implement security best practices effortlessly with our DevSecOps integration</p>
            </div>
            </div>

            <div className="devops-desc animate__animated animate__fadeInUp animate__delay-5s">
                <div className="devops-desc-text">
                    <h1>Effortless DevOps</h1>
                    <p>Experience the future of DevOps with One Click DevOps, where deploying your applications is as simple as a single click. Get started today and transform your development workflow!</p>
                    <Link to='/contact-us'><button>Let's Connect</button></Link>
                </div>
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-the-devops-software-development-it-concept-devops-software-development-it-concept-photo-image_2078003.jpg' alt=''/>
            </div>
        </div>
    )
}

export default Products;