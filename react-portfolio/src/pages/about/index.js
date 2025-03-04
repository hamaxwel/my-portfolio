import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, worktimeline, skills, services } from "../../content_option";
import { FaJs, FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiFastapi } from "react-icons/si";

export const About = () => {
  // Map skill names to corresponding icons
  const skillIcons = {
    JavaScript: <FaJs size={40} className="text-yellow-500" />,
    React: <FaReact size={40} className="text-blue-500" />,
    "Tailwind CSS": <SiTailwindcss size={40} className="text-teal-500" />,
    "React Native": <FaReact size={40} className="text-blue-500" />,
    Python: <FaPython size={40} className="text-green-500" />,
    Bootstrap: <FaBootstrap size={40} className="text-purple-500" />,
    Flask: <SiFlask size={40} style={{ color: "black", backgroundColor: "white", padding: "5px", borderRadius: "50%" }} />,
    FastAPI: <SiFastapi size={40} className="text-green-500" />,
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i} className="d-flex align-items-center mb-4">
                {skillIcons[data.name]}
                <h3 className="progress-title ml-4" style={{ marginLeft: "20px" }}>
                  {data.name}
                </h3>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
