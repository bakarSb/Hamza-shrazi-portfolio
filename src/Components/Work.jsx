const projects = [
    {
        id: 1,
        title: 'E-Commerce Growth Funnel',
        category: 'Marcom + Tech',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
        link: '#',
    },
    {
        id: 2,
        title: 'Corporate Website - React',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
        link: '#',
    },
    {
        id: 3,
        title: 'Training LMS Platform',
        category: 'Education Tech',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
        link: '#',
    },
    {
        id: 4,
        title: 'Brand Communication Kit',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600',
        link: '#',
    },
    {
        id: 5,
        title: 'Lead Generation Campaign',
        category: 'Marketing Tech',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
        link: '#',
    },
    {
        id: 6,
        title: 'Portfolio Websites for Trainers',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600',
        link: '#',
    },
];

function Work() {
    return (
        <section className="work" id="work">
            <div className="container">
                <div className="work-header">
                    <span className="section-tag">SELECTED WORK</span>
                    <h2>Projects that delivered <span>real results.</span></h2>
                </div>

                <div className="work-grid">
                    {projects.map((project) => (
                        <a href={project.link} className="work-card" key={project.id}>
                            <div className="work-img">
                                <img src={project.image} alt={project.title} />
                                <div className="work-overlay">
                                    <span>View Project →</span>
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;