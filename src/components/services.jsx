import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPenNib,faScrewdriverWrench} from "@fortawesome/free-brands-svg-icons";

function Services() {
  return (
    <div>
        <h2>My Services</h2>
        <div>
            <FontAwesomeIcon icon={faCode} />
            <h3>Web Development</h3>
            <p>I build responsive and high-performance websites using modern technologies, 
                ensuring seamless functionality across all devices.
            </p>
        </div>

        <div>
            <FontAwesomeIcon icon={faPenNib} />
            <h2>UI/UX Design</h2>
            <p>
                I design clean and user-friendly interfaces focused on delivering intuitive and engaging user experiences.
            </p>
        </div>

        <div>
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <h2>Maintenance & Support</h2>
            <p>
                I provide ongoing support and updates to keep websites secure, functional, and up to date.
            </p>
        </div>
    </div>
  )
}

export default Services