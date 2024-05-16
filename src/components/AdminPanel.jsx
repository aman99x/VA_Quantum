import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            const fetchUsers = async () => {
                try {
                    const token = localStorage.getItem('token');
                    const res = await axios.get('http://localhost:5000/api/contacts', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setUsers(res.data);
                } catch (err) {
                    console.error(err);
                    alert('Error fetching users');
                }
            };

            fetchUsers();
        }
    }, [isLoggedIn]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setIsLoggedIn(true);
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="p-6 mr-9 text-black">
                <h1 className="text-white text-2xl font-bold mb-4">Admin Login</h1>
                <form className='text-white justify-center selection:' onSubmit={handleLogin}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border p-2 mb-4"
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border p-2 mb-4"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="p-4 text-black">
            <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Mobile</th>
                            <th className="px-4 py-2 border">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td className="px-4 py-2 border">{user.name}</td>
                                <td className="px-4 py-2 border">{user.email}</td>
                                <td className="px-4 py-2 border">{user.mobile}</td>
                                <td className="px-4 py-2 border">{user.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;
