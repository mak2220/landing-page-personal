import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/contact.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        const phonePattern = /^[1-9][0-9]*$/;
            
        if (name === 'phone') {
            if (value === '' || phonePattern.test(value)) {
                setFormData({ ...formData, [name]: value });
                setError('');
            } else {
                setError('Invalid phone number. Must not start with 0.');
            }
            } else {
                setFormData({ ...formData, [name]: value });
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        const response = await axios.post('/api/contact', formData);
        if (response.status === 200) {
            setResponseMessage('Message sent successfully.');
            setFormData({ name: '', email: '', phone:'', message: '' });
        }
    } catch (error) {
            setResponseMessage('There was an error sending the message.');
            console.error(error);
        }
    };
    

    return (
        <main>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h1>Contact</h1>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">E Mail</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="^[1-9][0-9]*$"
                        title="Please enter a valid phone number"
                        placeholder="3456 407808"
                    />
                    {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Messge</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.divBtn}>
                        <button type="submit" className={styles.btn}>Send</button>
                        {responseMessage && <p>{responseMessage}</p>}
                    </div>
                </form>
                <div className={styles.text}>
                    <h3>🌐 Do you need an attractive personal page?</h3>
                        <p>Bring your online presence to life with a custom-made personal website. From elegant design to advanced functionality, we transform your ideas into a digital reality that stands out.</p>
                    <h3>🚀 Do you have a development project in mind?</h3>
                        <p>From innovative web solutions to custom applications, we are ready to take on any challenge. Share your vision with us and {`let's`} work together to create something spectacular.</p>
                    <h3>{`Don't`} wait any longer! Contact us today and {`let's`} make your most ambitious ideas a reality.</h3>
                </div>
            </section>
        </main>
    )
}

export default Contact;