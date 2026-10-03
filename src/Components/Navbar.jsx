import { useEffect, useRef, useState } from "react"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className="navbar" ref={navRef}>
            <div className="container nav-wrapper">

                <a href="#" className="logo" onClick={() => setIsOpen(false)}>Hamza Shrazi.</a>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li><a href="#teaching" onClick={() => setIsOpen(false)}>Teachings</a></li>
                    <li><a href="#work" onClick={() => setIsOpen(false)}>Work</a></li>
                    <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
                    <li><a href="#contact" className="btn" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>

                <button className="hamburger" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
                    <span></span><span></span><span></span>
                </button>

            </div>
        </div>
    )
}
export default Navbar