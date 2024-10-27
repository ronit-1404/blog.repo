// import React, { useContext, useState } from 'react';
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Input,
//     Button,
//     Typography,
// } from '@material-tailwind/react';
// import myContext from '../../../context/data/myContext';

// export default function AdminLogin() {
//     const context = useContext(myContext);
//     const { mode } = context;

//     // State for email, password, and error handling
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError(''); // Clear previous errors

//         if (!email || !password) {
//             setError('Both fields are required.');
//             return;
//         }

//         console.log('Logging in with:', { email, password });
//         // Add login logic here
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//             {/* Login Card */}
//             <Card
//                 className="w-full max-w-[24rem]"
//                 style={{
//                     background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
//                 }}
//             >
//                 {/* Card Header */}
//                 <CardHeader
//                     color="blue"
//                     floated={false}
//                     shadow={false}
//                     className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
//                     style={{
//                         background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
//                     }}
//                 >
//                     <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2">
//                         <img
//                             src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
//                             className="h-20 w-20"
//                             alt="Admin Icon"
//                         />
//                     </div>
//                     <Typography
//                         variant="h4"
//                         style={{
//                             color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
//                         }}
//                     >
//                         Admin Login
//                     </Typography>
//                 </CardHeader>

//                 {/* Card Body */}
//                 <CardBody>
//                     <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//                         {error && <div className="text-red-500">{error}</div>}
//                         <Input
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                         <Input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <Button
//                             type="submit"
//                             style={{
//                                 background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
//                                 color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
//                             }}
//                         >
//                             Login
//                         </Button>
//                     </form>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// }
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
                <h1 className="text-4xl font-bold text-center">BlogAlchemy</h1>
                <p className="mt-2 text-lg text-center">Imagine, Explore, Create</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-white text-2xl">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="#" className="text-white text-2xl">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="text-white text-2xl">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <div className="mt-8 space-y-4">
                    <a href="#" className="block border-b border-white pb-2 text-center">Name</a>
                    <a href="#" className="block border-b border-white pb-2 text-center">Your contact</a>
                </div>

                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                    {error && <div className="text-red-500 text-center">{error}</div>}
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