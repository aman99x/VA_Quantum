import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const { name, email, mobile, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const mobilePattern = /^\d{10,}$/;
        if (!mobilePattern.test(mobile)) {
            alert('Mobile number must be at least 10 digits long and contain only numbers.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/contact', formData);
            console.log(res.data);
            alert('Message sent successfully');
            
            // Clear form data
            setFormData({
                name: '',
                email: '',
                mobile: '',
                message: ''
            });
        } catch (err) {
            console.error(err);
            alert('Error sending message');
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                        className="text-black w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                        className="text-black w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Mobile Number</label>
                    <input
                        type="text"
                        name="mobile"
                        value={mobile}
                        onChange={onChange}
                        required
                        pattern="\d{10,}"
                        title="Mobile number must be at least 10 digits long and contain only numbers."
                        className="text-black w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={onChange}
                        required
                        className="text-black w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Register;
