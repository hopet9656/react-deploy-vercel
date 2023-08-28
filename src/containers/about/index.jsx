import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Hope Tshepo Mashakeni",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Gauteng, Pretoria, South Africa",
  },
  {
    label: "Email",
    value: "hopet9656@gmail.com",
  },
  {
    label: "Contact No",
    value: "0793828442",
  },
];

const jobSummary =
  "My name is Hope Mashakeni, and I am enthusiastic about the opportunity to contribute my skills and experience to your esteemed company. As a qualified software developer and a graduate in IT technology, my journey in the world of technology has been one of continuous growth and dedication.I wor in the IT department.My academic background in software engineering has equipped me with a strong foundation in various programming languages, software design principles, and problem-solving techniques. Through rigorous coursework and practical projects, I honed my ability to create efficient and innovative software solutions that align with industry standards. This passion for crafting elegant and effective code drove me to excel in my studies and graduate with a solid understanding of the ever-evolving landscape of technology.During my time at PSA Head Office, I had the privilege of working within the IT department, where I immersed myself in a range of roles that enriched my technical expertise. My initial role in IT support provided me with valuable insights into the challenges end-users face and allowed me to develop a patient and empathetic approach to troubleshooting. Collaborating with colleagues across different departments, I learned to effectively communicate complex technical concepts in a clear and accessible manner, fostering a positive user experience.. Highly motivated and junior Python developer with a strong foundation in computer science principles and practical experience. Proficient in Python programming and skilled in various libraries and frameworks. Successfully developed a number of user-friendly applications, including a RESTful API for a weight gain tracking app. Eager to contribute my knowledge and enthusiasm to a dynamic development team. Proactive problem-solver, with a track record of delivering impactful projects in Python development. Successfully transitioned from an experienced IT helpdesk into software development";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Back End Developer</h3>
            <p>{jobSummary}</p>

            {/* You can add more content here if needed */}
          </Animate>

          <h3 className="personalInformationHeaderText">
            Personal Information
          </h3>
          <ul>
            {personalDetails.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
