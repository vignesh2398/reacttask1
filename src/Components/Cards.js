import React from 'react'
import './Cards.css';

export default function Cards(pro2) {
  return (
      
    <div className="listcomp">

                <h5 className="head">{pro2.head}</h5>
                <h3 className="card-price">{pro2.fil}<span className="period">/month</span></h3>
                <div className="line-3">
                  <hr/>
                </div>

            <ul>   
                {pro2.fil==='$9' ? <li><b>5 Users</b> </li>: null}
                {pro2.fil==='$49' ? <li><b>Unlimited Users</b> </li>: null}
                <li>Single User</li>
                {pro2.fil==='$0' ? <li>5GB Storage </li>: pro2.fil==='$9' ? <li>50GB Storage </li>: pro2.fil==='$49' ? <li>150GB Storage </li>: null}
                <li>Unlimited Public Projects</li>
                <li>Community Access</li>
                <li>Unlimited Private Projects</li>
                <li>Dedicated Phone Support</li>
                {pro2.fil==='$49' ? <li><span></span><b>Unlimited</b> Free Subdomains </li>: <li><span>cross</span>Free Subdomain</li>}
                
                <li style={{ listStyleType: "" }}>Monthly Status Reports</li>
            </ul>
            <button className='button1'> button  </button>
        </div>
        
  )
}
