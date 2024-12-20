import React from 'react';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import { RiSettings3Line } from "react-icons/ri";
import { FaIoxhost } from "react-icons/fa6";

const Settings = () => {
    return (
        <motion.div 
            className="flex items-center justify-between pt-3 px-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-between gap-8">
                <motion.h1 
                    className="text-[40px] font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Dashboard
                </motion.h1>
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon-item rounded-full p-1" />
                    <motion.input
                        type="text"
                        placeholder="Type to search for everything...."
                        className="px-10 py-2 w-80 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 nav-item border-none"
                        whileFocus={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>
            </div>
            <div className='flex items-center gap-5'>
                <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                >
                    <RiSettings3Line className='icon-item rounded-full text-[28px] p-1 text-white' />
                </motion.div>
                <motion.button 
                    className='icon-item px-4 py-2 rounded-full text-white text-xs'
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Download Report
                </motion.button>
                <motion.button 
                    className='bg-[#baf562] text-xs px-4 py-2 rounded-full'
                    whileHover={{ scale: 1.05, backgroundColor: "#c5ff6e" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className='flex items-center gap-1'>
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <FaIoxhost />
                        </motion.div>
                        <span>AI Assistant</span> 
                    </div>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Settings;

