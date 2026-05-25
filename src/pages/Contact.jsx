import { IoCallOutline, IoMailOutline, IoSparklesOutline, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5"; 
import "./Contact.css";

function Contact() {
  const mentalHealthQuotes = [
    {
      text: "Healing takes time, and asking for help is a courageous step.",
      author: "Mariska Hargitay"
    },
    {
      text: "Your mind is an ecosystem. Give yourself the grace to weather the storms and the patience to let yourself bloom.",
      author: "NeuroBloom Vision"
    }
  ];

  return (
    <div className="contact-page-container">
      <div className="contact-main-layout">
        
        {/* Left Side: Personal Contact & Socials */}
        <div className="contact-info-section">
          <span className="contact-pretitle">Get In Touch</span>
          <h1>Contact Us For More Info</h1>
          <p className="contact-intro-text">
            Have questions about NeuroBloom, or want to know more about our mental clarity tools? 
            Please don't hesitate to reach out. I am always open to chatting and sharing more resources!
          </p>

          <div className="personal-card">
            <div className="personal-badge">Founder & Developer</div>
            <h2>Zahraa Dekmak</h2>
            
            <div className="personal-details">
              <div className="p-detail-row">
                <IoCallOutline className="p-icon-react" />
                <a href="tel:+96100000000" className="p-link">+961 XX XXX XXX</a>
              </div>
              
              <div className="p-detail-row">
                <IoMailOutline className="p-icon-react" />
                <a href="mailto:zahraa@example.com" className="p-link">zahraadekmak4@gmail.com</a>
              </div>
            </div>

            {/* Social Connect Group */}
            <div className="social-connect-wrapper">
              <p className="social-title">Connect with me personally:</p>
              <div className="social-links-grid">
                <a 
                  href="https://www.instagram.com/zahraadekmak_?igsh=Zmt0aWZ6ZWxqemxv" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn instagram-btn"
                >
                  <IoLogoInstagram /> <span>Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/zahraa-dekmak-192597375?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn linkedin-btn"
                >
                  <IoLogoLinkedin /> <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Comfort Quotes Panel */}
        <div className="contact-quotes-section">
          <div className="quotes-glass-box">
            <div className="quotes-icon-wrapper">
              <IoSparklesOutline className="sparkle-icon-react" />
            </div>
            <h3>Words of Comfort</h3>
            
            <div className="quotes-stack">
              {mentalHealthQuotes.map((quote, idx) => (
                <blockquote key={idx} className="comfort-blockquote">
                  <p className="quote-body">“{quote.text}”</p>
                  <cite className="quote-author">— {quote.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;