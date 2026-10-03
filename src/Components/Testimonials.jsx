const testimonials = [
    {
        id: 1,
        name: 'Ahmed Raza',
        role: 'Student - Digital Marketing',
        text: 'Hamza bhai ne marketing ko itna easy bana diya. Theory nahi, direct practical kaam. Ab main apne 2 clients handle kar raha hun.',
        avatar: 'https://i.pravatar.cc/100?img=11',
        rating: 5,
    },
    {
        id: 2,
        name: 'Sara Khan',
        role: 'Frontend Developer',
        text: 'Best trainer for React. He teaches Marcom + Tech together, which no one else does. My portfolio got me a job because of his guidance.',
        avatar: 'https://i.pravatar.cc/100?img=32',
        rating: 5,
    },
    {
        id: 3,
        name: 'Usman Ali',
        role: 'Founder, Local Business',
        text: 'We hired Hamza for our website and marketing funnel. Sales doubled in 2 months. Highly professional and result-oriented.',
        avatar: 'https://i.pravatar.cc/100?img=8',
        rating: 5,
    },
];

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="section-tag">TESTIMONIALS</span>
                    <h2>What my students & clients <span>say about me.</span></h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t) => (
                        <div className="testimonial-card" key={t.id}>
                            <div className="stars">
                                {'★'.repeat(t.rating)}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-user">
                                <img src={t.avatar} alt={t.name} />
                                <div>
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;