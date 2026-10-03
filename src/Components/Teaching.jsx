const courses = [
    {
        title: 'Digital Marketing Mastery',
        level: 'Beginner to Advanced',
        students: '60+ Students',
        tag: 'Most Popular',
        points: ['SEO, Social Media & Ads', 'Marketing Funnels & Automation', 'Live Projects'],
    },
    {
        title: 'Frontend Development',
        level: 'Hands-on Coding',
        students: '40+ Students',
        tag: 'Technical',
        points: ['HTML, CSS, JavaScript, React', 'Portfolio Building', 'Freelancing Guide'],
    },
    {
        title: 'Marcom Tech Bootcamp',
        level: 'For Professionals',
        students: 'Corporate Teams',
        tag: 'New Batch',
        points: ['Brand Communication', 'Marketing Technology Stack', 'Growth Strategy'],
    },
];

function Teaching() {
    return (
        <section className="teaching" id="teaching">
            <div className="container">

                <div className="teaching-top">
                    <div className="teaching-intro">
                        <span className="section-tag">TRAINER & MENTOR</span>
                        <h2>Teaching what I <span>actually do.</span></h2>
                    </div>
                    <p className="teaching-desc">
                        No theory, only practical skills. I train students and corporate teams on skills that get them hired and get results.
                    </p>
                </div>

                <div className="teaching-grid">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div className="course-head">
                                <span className="course-tag">{course.tag}</span>
                                <h3>{course.title}</h3>
                                <div className="course-meta">
                                    <span>{course.level}</span> • <span>{course.students}</span>
                                </div>
                            </div>
                            <ul className="course-points">
                                {course.points.map((p, i) => (
                                    <li key={i}>✓ {p}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="course-btn">Enroll Now</a>
                        </div>
                    ))}
                </div>

                <div className="teaching-banner">
                    <div>
                        <h4>Want corporate training for your team?</h4>
                        <p>I provide custom workshops for universities and companies in Lahore & online.</p>
                    </div>
                    <a href="#contact" className="banner-btn">Book a Workshop</a>
                </div>

            </div>
        </section>
    );
};

export default Teaching;