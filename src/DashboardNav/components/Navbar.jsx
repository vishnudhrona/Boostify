import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StormIcon from '@mui/icons-material/Storm';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    const handleExpandClick = () => {
        setShowLogout((prev) => !prev);
    };

    const logout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <motion.div 
            className="flex justify-between px-10 py-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <span className='text-[#baf562] text-center flex items-center'>
                    <StormIcon />
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Boostify
                    </motion.span>
                </span>
            </motion.div>
            <motion.div 
                className="nav-item flex items-center gap-10 text-white text-xs px-5 py-3 rounded-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {['Weather', 'ToDo List', 'Products', 'Analytics', 'Reporting'].map((item, index) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item === 'Weather' || item === 'ToDo List' ? (
                            <Link to={item === 'Weather' ? "/weather" : "/rankingdnd"} className=''>
                                {item}
                            </Link>
                        ) : (
                            <p>{item}</p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
            <motion.div 
                className='flex items-center justify-center gap-3 bg-[#0d1201] rounded-full text-white text-xs px-5'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <NotificationsNoneIcon sx={{ width: 15, color: '#676b6a' }} />
                <div className='flex items-center justify-center gap-1'>
                    <Avatar
                        sx={{ width: 25, height: 25 }}
                        alt="Remy Sharp" 
                        src="https://wallpapers.com/images/featured/mui-goku-atn1fsic6f67zudr.jpg"
                    />
                    <div>
                        <p className='text-gray-500'>Vishnu Dhrona</p>
                        <p className='text-[8px] text-gray-500'>premium Plan</p>
                    </div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleExpandClick}
                >
                    {showLogout ? 
                        <ExpandMoreIcon sx={{ width: 15, color: '#676b6a' }} /> : 
                        <ExpandLessIcon sx={{ width: 15, color: '#676b6a' }} />
                    }
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {showLogout && (
                    <motion.div 
                        className="absolute right-48 top-28 bg-white text-black p-3 rounded shadow-md"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button 
                            sx={{ background: "#baf562" }} 
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;

