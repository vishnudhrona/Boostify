import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { MotionConfig, motion } from 'framer-motion';
import { FiPieChart } from "react-icons/fi";


const TotalVolueme = () => {
    return (
        <motion.div
            className='bg-[#e7f0da] rounded-lg px-5 py-5 mb-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
        >
            <div className='flex justify-between items-center gap-32'>
                <div className="flex items-center gap-4">
                    <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-4xl font-semibold'
                    >
                        300
                    </motion.span>
                    <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='bg-[#aced4e] px-3 py-1 rounded-full text-sm font-semibold'
                    >
                        +16.5%
                    </motion.span>
                </div>
                <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <FiPieChart className='bg-[#dcedc2] rounded-full p-2 text-[35px]'/>
                </motion.div>
            </div>
            <motion.p 
                className='w-[220px] mt-1 font-semibold'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Total volume of services provided
            </motion.p>
            <motion.button 
                className='mt-3 text-sm font-semibold'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className='flex items-center gap-1'>
                    <span>More detail</span>
                    <ArrowOutwardIcon sx={{width: 20, height: 20}}/>
                </div>
            </motion.button>
        </motion.div>
    )
}

export default TotalVolueme