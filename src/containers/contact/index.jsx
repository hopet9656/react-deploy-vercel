import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text"></h3>
        </Animate>
        <div className="contact__content__details">
          <div className="contact__detail">
            <FaEnvelope className="contact__icon" />
            <p>Email: hopet9656@gmail.com</p>
          </div>
          <div className="contact__detail">
            <FaPhone className="contact__icon" />
            <p>Phone: 0793828442</p>
          </div>
          <div className="contact__detail">
            <a
              href="https://www.facebook.com/hope.tshepo.148"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="contact__icon" />
              <p>Facebook</p>
            </a>
          </div>
          <div className="contact__detail">
            <a
              href="https://www.instagram.com/yourinstagramprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="contact__icon" />
              <p>Instagram</p>
            </a>
          </div>
          <div className="contact__detail">
            <a
              href="https://www.linkedin.com/in/hope-mashakeni-48a877190"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact__icon" />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
