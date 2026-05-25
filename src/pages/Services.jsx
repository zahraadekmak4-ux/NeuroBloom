import { IoTimeOutline, IoMailOutline, IoCallOutline } from "react-icons/io5"; // Import icons
import "./Services.css";

function Services() {
  const organizations = [
    {
      name: "Ta Heal",
      availability: "All days (9:00 am - 6:00 pm)",
      number: "+961 70 330 837",
      email: "info@taheal.org"
    },
    {
      name: "Build Psychology",
      availability: "All days (9:00 am - 8:00 pm)",
      number: "+961 3 881 554",
      email: "contact@buildpsychology.com"
    },
    {
      name: "BrainStation Clinics",
      availability: "All days (24 hours)",
      number: "+961 70 653 550",
      email: "info@brainstation.uk"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Professional Support Networks</h1>
        <p className="services-main-instruction">
          Please take a moment out of your day to call these numbers. The people on the other side 
          of these lines are <strong>highly trained mental health professionals</strong>. They are completely 
          dedicated to listening to you, offering guidance, and giving you the safe time and space 
          you deserve to talk through your struggles. 
        </p>
      </div>

      <div className="organizations-grid">
        {organizations.map((org, index) => (
          <div key={index} className="org-card">
            <div className="org-badge">Verified Professional Centre</div>
            <h2>{org.name}</h2>
            
            <div className="org-details">
              <div className="detail-row">
                <IoTimeOutline className="detail-icon-react" /> {/* React Icon */}
                <span className="detail-text">{org.availability}</span>
              </div>
              
              <div className="detail-row">
                <IoMailOutline className="detail-icon-react" /> {/* React Icon */}
                <a href={`mailto:${org.email}`} className="detail-link">{org.email}</a>
              </div>
            </div>
            
            <div className="phone-box">
              <IoCallOutline className="phone-icon-react" /> {/* React Icon */}
              <a href={`tel:${org.number.replace(/\s+/g, '')}`} className="phone-number">
                {org.number}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;