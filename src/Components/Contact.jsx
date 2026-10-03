import { useState } from 'react';

function Contact() {
    // PASTE YOUR GOOGLE SHEET WEB APP URL HERE
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyOsM88lOQVJVzZ9crDIjuzohK_Bid2SnI15yY3GPpchekC-XQBBxQqtsxrGcvoqyct6A/exec";

    const [form, setForm] = useState({ name: '', email: '', service: 'Digital Marketing', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            setStatus('Message sent successfully! ✅ Check your Google Sheet.');
            setForm({ name: '', email: '', service: 'Digital Marketing', message: '' });

            setTimeout(() => setStatus(''), 4000);
        } catch (error) {
            setStatus('Failed to send. Please try again.');
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container contact-wrapper">

                <div className="contact-left">
                    <span className="section-tag">GET IN TOUCH</span>
                    <h2>Let's build something <span>amazing.</span></h2>
                    <p>Have a project or want training for your team? Fill the form, I will reply within 24 hours. Data goes to my Google Sheet.</p>

                    <div className="contact-info">
                        <div>📧 hamza.shrazi@email.com</div>
                        <div>📍 Lahore, Pakistan (Available Worldwide)</div>
                        <div>📱 WhatsApp: +92 300 1234567</div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />

                    <select name="service" value={form.service} onChange={handleChange}>
                        <option>Digital Marketing</option>
                        <option>Web Development</option>
                        <option>Marcom Strategy</option>
                        <option>Corporate Training</option>
                    </select>

                    <textarea name="message" placeholder="Your Message..." rows="5" value={form.message} onChange={handleChange} required></textarea>

                    <button type="submit">Send Message</button>
                    {status && <p className="form-status">{status}</p>}
                </form>

            </div>
        </section>
    );
};

export default Contact;