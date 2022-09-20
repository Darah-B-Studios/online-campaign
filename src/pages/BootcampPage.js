import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components";
import { ROUTES } from "../routes";
import "../styles/bootcamp-page.scss"

const BootcampPage = () => {
    const navigate = useNavigate();

    return (
        <AppShell>
            <header className="header">
                <h2 className="header__title">Become <span className="header__title_decorated">A Frontend Developer</span> In 12 Weeks.</h2>
                <p className="header__text">Learn the set of skills you need to know to become modern day frontend web developer</p>
                <button className="button button_primary" onClick={() => navigate(ROUTES.SIGN_UP)}>Get started</button>
            </header>
            <section style={{ display: 'block', padding: "4rem 0" }}>
                <Row gutter={[16, 16]}>
                    <Col md={8} style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '2rem' }}>Who is this for?</h3>
                        <ul>
                            <li>If you have been eager to learn how to build websites and stand the chance of having a job in the industry</li>
                            <li>Anyone who want to improve his/her skills in becoming a world-class frontend developer.</li>
                            <li>Anyone looking for mentorship and wants a community of like-minded learners who will help in learning together and keeping each other accountable</li>
                        </ul>
                    </Col>
                    <Col md={16}>
                        <img src="https://cdn.devdojo.com/images/october2021/tails-laptop-screen.png" style={{ maxWidth: '100%', height: 'auto' }} alt="bootcamp show" />
                    </Col>
                </Row>
            </section>


            <section className="benefits">
                <Row gutter={[30, 30]}>
                    <Col md={8}>
                        <img className="fluid__image" src="https://cdn.devdojo.com/images/march2022/code.png" alt="code block with blue gradient background" />
                        <h4 className="benefits__title">Beginner Friendly</h4>
                        <p>This program is tailored with beginners in mind and it designed to teach you the skills you need to become a frontend developer. Everthing will be taken from the ground up, with live classes and interative projects that should validate your understanding of concepts</p>
                    </Col>
                    <Col md={8}>
                        <img className="fluid__image" src="https://cdn.devdojo.com/images/march2022/brush.png" alt="code block with blue gradient background" />
                        <h4 className="benefits__title">Best UI practices</h4>
                        <p>You will not only be taught on what to do, you will also be taught on the best practices to adopt in building websites that are responsive, user friendly and interactive.</p>
                    </Col>
                    <Col md={8}>
                        <img className="fluid__image" src="https://cdn.devdojo.com/images/march2022/cloud.png" alt="code block with blue gradient background" />
                        <h4 className="benefits__title">Build your own portfolio</h4>
                        <p>Establish your presence on the web by building your very own portfolio website from the ground up and deploy on the server for free</p>
                    </Col>
                </Row>
            </section>

            {/* <section className="techologies">
                <Row gutter={[30, 30]}>
                    <Col md={6} className="tech-card">
                        <span className="tech-card__icon">
                        </span>
                        <p className="tech-card__text">HTML is the building block for all websites.</p>
                    </Col>
                    <Col md={6} className="tech-card">
                        <span className="tech-card__icon">
                        </span>
                        <p className="tech-card__text">HTML is the building block for all websites.</p>
                    </Col>
                    <Col md={6} className="tech-card">
                        <span className="tech-card__icon">
                        </span>
                        <p className="tech-card__text">HTML is the building block for all websites.</p>
                    </Col>
                </Row>
            </section>
            */}
        </AppShell>
    )
}

export default BootcampPage

