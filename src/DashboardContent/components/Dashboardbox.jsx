import React from 'react';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Dashboardbox = () => {
    const boxVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const boxData = [
        { percentage: '30%', label: 'Advertising' },
        { percentage: '25%', label: 'Advertising' },
        { percentage: '30%', label: 'Advertising' },
        { percentage: '15%', label: 'Advertising' },
    ];

    return (
        <motion.div 
            className='grid grid-cols-2 gap-2'
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
        >
            {boxData.map((box, index) => (
                <motion.div
                    key={index}
                    className='flex justify-between items-center bg-[#030a03] px-5 py-5 rounded-lg'
                    variants={boxVariants}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div>
                        <motion.p 
                            className='text-white text-2xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {box.percentage}
                        </motion.p>
                        <motion.p 
                            className='text-xs text-gray-500'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            {box.label}
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <ArrowOutwardIcon sx={{color: "#baf562"}} />
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Dashboardbox;

