import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaDiscord,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
  .send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formData,
    process.env.REACT_APP_EMAILJS_USER_ID
  )
      .then(
        () => {
          setStatus({
            success: true,
            message: "Message sent successfully! ✅",
          });
          setFormData({ name: "", email: "", message: "" }); 
          setTimeout(() => {
            setStatus(null);
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          setStatus({ success: false, message: "Failed to send message. ❌" });
    
          // Remove error message after 5 seconds
          setTimeout(() => {
            setStatus(null);
          }, 5000);
        })
        .finally(() => setLoading(false));
    };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>
          Contact <span>Me</span>
        </h2>
        <p>
          Let's connect! Reach out via the form or through the platforms below.
        </p>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="http://wa.me/254745522729"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a href="mailto:gathereisaac20@gmail.com" className="email">
            <FaEnvelope />
          </a>
          <a
            href="https://discord.com/users/blcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="discord"
          >
            <FaDiscord />
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div class="submit-btn-container">
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </button>
          </div>

          {/* Status Message */}
          {status && (
            <p
              className={`status-message ${status.success ? "status-success" : "status-failure"}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
