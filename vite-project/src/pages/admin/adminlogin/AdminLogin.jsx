import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import myContext from '../../../context/data/myContext';

const UserProfileWithLogin = () => {
    const context = useContext(myContext);
    const { mode } = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

        console.log('Logging in with:', { email, password });
        // Add your login logic here
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-teal-900 bg-opacity-75 p-10 rounded-lg text-white w-96">
                <h1 className="text-4xl font-bold">Aditya Ghodki</h1>
                <p className="mt-2 text-lg">Imagine, Explore, Create</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-white text-2xl">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" className="text-white text-2xl">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="text-white text-2xl">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <div className="mt-8 space-y-4">
                    <a href="#" className="block border-b border-white pb-2">Bio</a>
                    <a href="#" className="block border-b border-white pb-2">Start a Blog</a>
                    <a href="#" className="block border-b border-white pb-2">Your contact</a>
                </div>

                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                    {error && <div className="text-red-500">{error}</div>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-teal-800 text-white placeholder-gray-300 p-2 rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-teal-800 text-white placeholder-gray-300 p-2 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfileWithLogin;
