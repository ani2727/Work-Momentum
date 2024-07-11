import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdHome } from "react-icons/md";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logoIcons}>
          <div className={styles.logoContainer}>
            <img
              src="https://i.postimg.cc/vH8HKbt3/Work-Momentum-1-1.png"
              alt="WMLOGO"
              className={styles.logo}
            />
          </div>

          <div className={styles.iconsContainer}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className={styles.icon} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact-us">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={styles.subscribe}>
          <h3>Subscribe</h3>
          <form>
            <div className={styles.emailInputContainer}>
            <a href="www.gmail.com" className={styles.emailIcon}>
              <MdEmail />
            </a>
              <input
                type="email"
                placeholder="Your email"
                className={styles.emailInput}
              />
            </div>
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.helpCenter}>
          <h3>Help Center</h3>
          <p><FaPhoneAlt  className={styles.contactIcon} /> +91 9705501016</p>
          <p><MdEmail className={styles.contactIcon} />hr@workmomentum.com</p>
          <p><MdHome  className={styles.homeIcon} /> Madhapur, Hyderabad.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
