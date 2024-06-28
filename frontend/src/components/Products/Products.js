import "./Products.css"
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
                            <h2>Comprehensive DevOps Ecosystem</h2>
                            <p style={{fontSize:'20px'}}>We integrate a robust set of DevOps tools and cloud providers, 
                            ensuring you have everything you need at your fingertips.</p>
                        </div>
                        <div className='products-offer-card'>
                            <h2>Seamless CI/CD Flows</h2>
                            <p style={{fontSize:'20px'}}> Develop and manage continuous integration and continuous deployment pipelines effortlessly.</p>
                        </div>
                        <div className='products-offer-card'>
                            <h2>Rapid Deployment</h2>
                            <p style={{fontSize:'20px'}}>With just one click, deploy your applications swiftly and reliably.</p>
                        </div>
                </div>
            </div>
            <div className='tech-stack'>
                <h1>Our Technology Stack</h1>
                <StatisticsTechStack/>
            </div>
            <div class="why-devops">
            <h1>Why Choose One Click DevOps</h1>
            <div class="why-devops-card animate__animated animate__fadeInUp">
                <h3>Efficiency</h3>
                <p style={{fontSize:'20px'}}>Save time with automated workflows and rapid deployment</p>
            </div>
            <div class="why-devops-card animate__animated animate__fadeInUp animate__delay-1s">
                <h3>Reliability</h3>
                <p style={{fontSize:'20px'}}>Ensure consistent and reliable releases with our integrated toolset</p>
            </div>
            <div class="why-devops-card animate__animated animate__fadeInUp animate__delay-2s">
                <h3>Flexibility</h3>
                <p style={{fontSize:'20px'}}>Use the cloud providers and tools you're already familiar with</p>
            </div>
            <div class="why-devops-card animate__animated animate__fadeInUp animate__delay-3s">
                <h3>Scalability</h3>
                <p style={{fontSize:'20px'}}>Scale your infrastructure seamlessly as your needs grow</p>
            </div>
            <div class="why-devops-card animate__animated animate__fadeInUp animate__delay-4s">
                <h3>Security</h3>
                <p style={{fontSize:'20px'}}>Implement security best practices effortlessly with our DevSecOps integration</p>
            </div>
            </div>

            <div class="devops-desc animate__animated animate__fadeInUp animate__delay-5s">
                <h3>Experience the future of DevOps with One Click DevOps, where deploying your applications is as simple as a single click. Get started today and transform your development workflow!</h3>
            </div>
        </div>
    )
}

export default Products;