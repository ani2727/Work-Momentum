
import './Careers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Careers = ()=>{
    return (
        <div className='body'>
            <div className='mainDiv'>
                <div><img src="/fe-hero-image-desktop.png" alt="img" className="img"/></div>
                <div>
                    <h1 id='heading1'>Tech jobs you want</h1>
                    <h1 id='heading2'>at companies you admire</h1>
                    <h3 id='subheading'>Build the Tech Career that's right for you..</h3>

                    <div className='searchDiv'>
                         <h4 id='searchtitle'>Start your <span id='searchsubtitle'>Job Search</span></h4>
                       <div className='inputContainer'>
                           <FontAwesomeIcon icon={faSearch} className='icon searchIcon' />
                           <input placeholder='Job Title, Skills or Company..' className='input' />
                      </div>
                      <div className='inputContainer'>
                           <FontAwesomeIcon icon={faMapMarkerAlt} className='icon mapIcon' />
                           <input placeholder='Location' className='input' />
                     </div>
                     <button className='btn'>Search Jobs</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;



