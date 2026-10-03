function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-wrapper">

                <div className="hero-text">
                    <p className="hero-tag">Marcom Technologist & Trainer</p>
                    <h1>
                        Muhammad Hamza <br />
                        <span>Shrazi.</span>
                    </h1>
                    <p className="hero-desc">
                        I bridge the gap between Marketing, Communication & Technology.
                        I build modern web experiences and train the next generation of digital talent.
                    </p>
                    <div className="hero-btns">
                        <a href="#work" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Let's Talk</a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="Muhammad Hamza Shrazi" />
                </div>

            </div>
        </section>
    );
};

export default Hero;