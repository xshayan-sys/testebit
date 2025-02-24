import React, { useState } from 'react';
import '../login Box/Email.css';

export default function Email() {
    const [email, setEmail] = useState('');

    const handleJoin = () => {
        if (email) {
            alert(`You’ve joined with: ${email} to Tastebite`);
        } else {
            alert('Please enter a valid email address!');
        }
    };

    return (
        <div className="Email-box">
            <h1>Deliciousness to your inbox</h1>
            <p className='recommendation'>Enjoy weekly hand picked recipes <br /> and recommendations</p>
            <div className="btn-email-box">
                <input
                    type="email"
                    className="email-input"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="join-btn" onClick={handleJoin}>JOIN</button>
            </div>
            <p className='Term'>By joining our newsletter you agree to our Terms and Conditions</p>
        </div>
    );
}
