import "./ContacUs.css";

const ContactUs = () => {
  return (
    <main className="main">
      <h1>Contact Us</h1>
      <div class="contact-container">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>Say something to start a live chat!</p>
          <br />
          <ul>
            <li>
              <i class="fa fa-phone"></i> +91 9705501016
            </li>
            <br />
            <li>
              <i class="fa fa-envelope"></i> workmomentum@gmail.com
            </li>
            <br />
            <li>
              <i class="fa fa-map-marker"></i> Madhapur, Hyderabad, Telangana
            </li>
            <br />
          </ul>
          <ul class="icons">
            <a href="https://twitter.com">
              <img
                width="30"
                src="https://img.icons8.com/color/48/twitter--v1.png"
                alt=""
              />
            </a>
            <a href="https://instagram.com">
              <img
                width="30"
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt=""
              />
            </a>
            <a href="https://facebook.com">
              <img
                width="30"
                src="https://img.icons8.com/?size=48&id=13912&format=png"
                alt=""
              />
            </a>
          </ul>
        </div>

        <div class="contact-form">
          <form id="contact-form">
            <div class="form-row">
              <div class="form-field">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="form-field">
                <label for="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-field">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div class="form-field">
              <label for="subject">Select Subject</label>
              <select id="subject" name="subject" required>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div class="form-field">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
