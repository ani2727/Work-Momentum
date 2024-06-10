import "./Services.css"

const Services = ()=>{
    return(
         <div className="body">

          <div className="Card">
            <div className='webData'>
                <h1 className='gradient-text'>Web Development</h1>
                <p className='text'>Save 30% on tuition, learn the full product design process and become dual certified in both UX and UI with credit-rated distinction. </p>
                <button className='btn'><h2>Book a Demo</h2></button> <button className='btn'><h2>enroll now for $100/mon</h2></button>
             </div>
            <div><img src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg" alt=""  id='webImg'/></div>
          </div>

          <div className="Card">
            <div><img src="https://st.depositphotos.com/57404040/61008/i/450/depositphotos_610081562-stock-photo-platform-engineering-concept-practice-designing.jpg" alt=""  id='webImg'/></div>
            <div className='webData'>
                <h1 className='cloudHeading'>Cloud & DevOps</h1>
                <p className='text'>Save 30% on tuition, learn the full product design process and become dual certified in both UX and UI with credit-rated distinction. </p>
                <button className='btn'><h2>Book a Demo</h2></button> <button className='btn'><h2>enroll now for $100/mon</h2></button>
             </div>
          </div>

          <div className="Card">
            <div className='webData'>
                <h1 className='gradient-text'>Product Design</h1>
                <p className='text'>Save 30% on tuition, learn the full product design process and become dual certified in both UX and UI with credit-rated distinction. </p>
                <button className='btn'><h2>Book a Demo</h2></button> <button className='btn'><h2>enroll now for $100/mon</h2></button>
             </div>
            <div><img src="https://www.marketing91.com/wp-content/uploads/2017/01/Product-design.jpg" alt=""  id='webImg'/></div>
          </div>

       </div>

    )
}

export default Services;

// const Services = () =>{
//     return (
//         <div>Services</div>
//     )
// }

// export default Services;