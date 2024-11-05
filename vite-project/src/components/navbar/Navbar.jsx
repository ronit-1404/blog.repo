import React, { useContext } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
    Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import SearchDialog from "../SearchDialog/SearchDialog";
import ShareDialogBox from "../sharedialog/ShareDialog";

export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);
    const context = useContext(myContext);
    const { mode, toggleMode } = context;
    const navigate = useNavigate();

    // Admin status from localStorage
    const admin = localStorage.getItem('admin');

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('admin'); // Remove admin from localStorage
        navigate('/'); // Redirect to home page
    };

    // All NavList 
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/'} className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/allblogs'} className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            {admin ? (
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal cursor-pointer"
                    style={{ color: mode === 'dark' ? 'white' : 'white' }}
                    onClick={handleLogout}
                >
                    Logout
                </Typography>
            ) : (
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                    style={{ color: mode === 'dark' ? 'white' : 'white' }}
                >
                    <Link to={'/adminlogin'} className="flex items-center">
                        Login
                    </Link>
                </Typography>
            )}
        </ul>
    );

    return (
        <>
            {/* Navbar */}
            <Navbar
                className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
                style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}
            >
                {/* Desktop View */}
                <div className="flex items-center justify-between text-blue-gray-900">
                    {/* Home Page Link */}
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                        >
                            <img
                                className="w-10 h-10"
                                src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
                                alt="Logo"
                            />
                            <span>Devknus</span>
                        </Typography>
                    </Link>

                    {/* All Items */}
                    <div className="flex items-center gap-4">
                        {/* Navlist */}
                        <div className="hidden lg:block">{navList}</div>

                        {/* Search Icon */}
                        <SearchDialog />

                        {/* Share Icon */}
                        <div className="hidden lg:block">
                            <ShareDialogBox />
                        </div>

                        {/* Admin Profile Pic */}
                        {admin && (
                            <Link to={'/dashboard'}>
                                <Avatar
                                    src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                                    alt="avatar"
                                    withBorder={true}
                                    className="p-0.5 w-10 h-10"
                                    style={{
                                        border:
                                            mode === 'dark'
                                                ? '2px solid rgb(226, 232, 240)'
                                                : '2px solid rgb(30, 41, 59)',
                                    }}
                                />
                            </Link>
                        )}

                        {/* Dark and Light Toggle */}
                        <IconButton
                            onClick={toggleMode}
                            className="rounded-full"
                            style={{
                                background: mode === 'light' ? '#ced6e0' : '#57606f',
                                color: mode === 'dark' ? 'white' : 'black',
                            }}
                        >
                            {mode === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                                    <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25M17.614 18.75l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3M7.977 7.227L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                                    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </IconButton>

                        {/* Mobile Toggle */}
                        <IconButton
                            className="ml-auto h-10 w-10 rounded-lg lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                            style={{
                                background: mode === 'light' ? '#ced6e0' : '#57606f',
                                color: mode === 'dark' ? 'white' : 'black',
                            }}
                        >
                            {openNav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                {/* Mobile View */}
                <Collapse open={openNav}>{navList}</Collapse>
            </Navbar>
        </>
    );
}
