import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out-cubic',
            delay: 100,
            once: false, // animate every time it enters viewport
            mirror: true, // animate out when scrolling past
        });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="home-section" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <video autoPlay loop muted className="video-bg">
                    <source src="/bg.jpg.mp4" type="video/mp4" />
                </video>
                <div className="content">
                    <h1 data-aos="zoom-in" data-aos-delay="200">Hi, I'm Milan Solanki</h1>
                    <p data-aos="fade-up" data-aos-delay="400">
                        Passionate Web Developer skilled in React.js, building modern, responsive, and dynamic web applications.
                    </p>
                    <Link
                        to="/projects"
                        className="button-link"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        View My Work
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section enhanced-about" data-aos="fade-left" data-aos-offset="300">
                <div className="about-container-split">
                    <div className="about-image" data-aos="fade-right" data-aos-delay="200">
                        <img src="/1.jpg" alt="About Milan Solanki" />
                    </div>
                    <div className="about-text" data-aos="fade-left" data-aos-delay="400">
                        <h2>About Me</h2>
                        <p>
                            I'm Milan Solanki, a front-end developer who thrives on building intuitive user experiences. With a strong foundation in React.js and modern UI/UX practices, I aim to craft clean, fast, and user-friendly web applications. I'm passionate about writing efficient code and bringing designs to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section" data-aos="zoom-out-up" data-aos-offset="250">
                <div className="skills-container">
                    <h2 data-aos="fade-up">Skills</h2>
                    <div className="skills-grid">
                        {[
                            'HTML',
                            'CSS',
                            'JavaScript',
                            'React.js',
                            'Node.js',
                            'MongoDB',
                            'Git & GitHub',
                            'Responsive Design',
                        ].map((skill, index) => (
                            <div
                                key={skill}
                                className="skill-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="800"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience-section" data-aos="fade-up-left" data-aos-offset="200">
                <div className="experience-container">
                    <h2 data-aos="zoom-in">Experience</h2>
                    <div className="experience-card" data-aos="flip-right" data-aos-delay="200">
                        <h3>React.js Intern</h3>
                        <h4>Maxgen Technologies Pvt Ltd</h4>
                        <p className="duration">Jan 2025 – Jun 2025</p>
                        <p>
                            Completed a 6-month internship focusing on responsive React.js applications, component architecture,
                            API integration, and user interface design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-section" data-aos="fade-up" data-aos-offset="150">
                <div className="footer-container">
                    <p><strong>Contact Me</strong></p>
                    <p>📞 +91 9662324671</p>
                    <p>📧 milansolanki06602@gmail.com</p>
                    <p>📍 Tankara, Morbi, Gujarat, India</p>
                </div>
            </footer>
        </>
    );
};

export default Home;