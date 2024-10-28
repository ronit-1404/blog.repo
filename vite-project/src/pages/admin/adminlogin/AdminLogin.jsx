import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import myContext from '../../../context/data/myContext';
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";

export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = async () => {
        if (!email || !password) {
            return toast.error("Fill all required fields");
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Success');
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Login Failed');
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        login();
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
            <Card
                className="w-full max-w-[24rem] bg-opacity-90"
                style={{
                    backgroundColor: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                }}
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{
                        backgroundColor: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                    }}
                >
                    <div className="flex justify-center space-x-4 text-white">
                        <a href="#"><FontAwesomeIcon icon={faGoogle} size="2x" /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    </div>
                    <Typography variant="h4" color="white" className="mt-4">Admin Login</Typography>
                    <Typography variant="body2" color="white">Imagine, Explore, Create</Typography>
                </CardHeader>

                <CardBody>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {error && <Typography color="red" className="text-center">{error}</Typography>}
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-teal-800 text-white placeholder-gray-300 p-2 rounded"
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-teal-800 text-white placeholder-gray-300 p-2 rounded"
                            required
                        />
                        <Button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                            onClick={login}
                            style={{
                                backgroundColor: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
                            }}
                        >
                            Login
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
