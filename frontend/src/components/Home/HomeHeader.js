import "./Home.css"
const HomeHeader = ()=>{
    return(
        <div className="home-header">
            <div className='home-body-text'>
            <h1>Your software development company</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur.
            </p>
            <div>
                <button>Let's talk</button></div>
            </div>
                <div className='home-body-img'>
                    <img src="hemoimage.svg" alt='' />
                </div>
        </div>
    )
}

export default HomeHeader;