function About() {
    return (
        <section className="about" id="about">
            <div className="container about-wrapper">

                <div className="about-left">
                    <span className="section-tag">ABOUT ME</span>
                    <h2>
                        Passionate about <br />
                        <span>Marketing x Tech.</span>
                    </h2>
                    <div className="about-stats">
                        <div className="stat">
                            <h3>5+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat">
                            <h3>100+</h3>
                            <p>Students Trained</p>
                        </div>
                        <div className="stat">
                            <h3>50+</h3>
                            <p>Projects Done</p>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <p className="about-para">
                        I am <strong>Muhammad Hamza Shrazi</strong>, a Marcom Technologist and Trainer based in Lahore. I don't just do marketing — I build the technology behind it.
                    </p>
                    <p className="about-para light">
                        My journey combines Marketing Communication with modern web technologies. From building high-converting websites to training individuals in digital skills, my goal is to make technology accessible and profitable.
                    </p>

                    <div className="skills">
                        <span>Digital Marketing</span>
                        <span>Marketing Technology</span>
                        <span>Frontend Development</span>
                        <span>Brand Communication</span>
                        <span>Corporate Training</span>
                        <span>React / Next.js</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;