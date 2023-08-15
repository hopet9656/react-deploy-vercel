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
    value: "Gauteng,Pretoria,South Africa",
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

const jobSummary ="Highly motivated and junior Python developer with a strong foundation in computerscience principles and practical experience. Proficient in Python programming and skilledin various libraries and frameworks. Successfully developed a number of user-friendlyapplications, including a RESTful API for a weight gain tracking app. Eager to contribute myknowledge and enthusiasm to a dynamic development team. Proactive problem-solver,with a track record of delivering impactful projects in Python development. Successfullytransioned from an experienced IT helpdesk into soffware development";      

const projectDetails = [
  {
    title: "Python Projects Breakdown",
    description:
      "PROJECT1:Created a weight gain tracking app using Python and an external API to track users' progress. The app allows users to set weight gain goals, record daily progress, and visualize trends over time. Acquired strong proficiency in working with RESTful APIs to fetch and store user data securely.",
    technologies: "Python",
    //repositoryLink:
      //"Link to the project's Github repository - https://hopet9656.github.io/weightTracker.github.io/",
    duties:
      "Designing the app architecture, integrating external API for data retrieval, implementing data visualization features, ensuring data privacy and security.",
  },
  //more projects
  {
    title: "Project 2",
    description:
      "Created a card form using Django, HTML, CSS, and JavaScript. The app allows users to submit credit card details online for purchasing items.",
    technologies: "Python, Django, HTML, CSS, JavaScript",
    repositoryLink:
      "Link to the project's Github repository - [Link to your repository]",
    duties:
      "Designing the card form, implementing data submission functionality, ensuring secure data handling.",
  },
];
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

            {/* Python Projects Breakdown */}
            <div className="project-breakdown">
            <h2 style={{ fontSize: '28px', color: 'var(--yellow-theme-main-color)' }}>
                Python Projects Breakdown
              </h2>
              
              <p>{projectDetails[0].description}</p>
              <p>Technologies Used: {projectDetails[0].technologies}</p>
              <p>Duties: {projectDetails[0].duties}</p>
            
            </div>
            {/* Project 2 */}
            <div className="project-breakdown">
              <h2 style={{ fontSize: '28px', color: 'var(--yellow-theme-main-color)' }}>
                Project 2
              </h2>
              <p>{projectDetails[1].description}</p>
              <p>
                <strong>Technologies Used:</strong> {projectDetails[1].technologies}
              </p>
              <p>
                <strong>Duties:</strong> {projectDetails[1].duties}
              </p>
              
              </div>
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




