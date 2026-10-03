const services = [
    {
        id: 1,
        icon: '🚀',
        title: 'Marcom Strategy',
        desc: 'Complete marketing communication strategy that aligns your brand, message, and technology for growth.',
    },
    {
        id: 2,
        icon: '💻',
        title: 'Web Development',
        desc: 'High-performance, modern websites in React / Next.js that are fast, responsive and conversion-focused.',
    },
    {
        id: 3,
        icon: '📈',
        title: 'Digital Marketing Tech',
        desc: 'Setup of marketing tech stack - automation, analytics, funnels, and tools to scale your business.',
    },
    {
        id: 4,
        icon: '🎓',
        title: 'Corporate Training',
        desc: 'Hands-on training for teams and students on Digital Marketing, Frontend, and Marcom tools.',
    },
];

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services-header">
                    <span className="section-tag">WHAT I DO</span>
                    <h2>Services that help you <span>grow faster.</span></h2>
                    <p>From strategy to execution - I handle the complete Marcom journey.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="#contact" className="service-link">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;