import React, { useContext, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from '@material-tailwind/react';
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
        <div className="flex items-center justify-center min-h-screen bg-teal-700 bg-opacity-50">
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

                <Card
                    className="mt-6"
                    style={{
                        background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                    }}
                >
                    <CardHeader
                        color="blue"
                        className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                        style={{
                            background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                        }}
                    >
                        <Typography
                            variant="h4"
                            style={{
                                color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                            }}
                        >
                            Admin Login
                        </Typography>
                    </CardHeader>

                    <CardBody>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            {error && <div className="text-red-500">{error}</div>}
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                style={{
                                    background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                    color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                                }}
                            >
                                Login
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default UserProfileWithLogin;
