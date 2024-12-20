import { LuUsersRound } from "react-icons/lu";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { MotionConfig, motion } from 'framer-motion';


const NumberofClients = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className='bg-[#030a03] rounded-lg px-5 py-5 mb-2'
        >
            <div className='flex justify-between items-center gap-32'>
                <div className="flex items-center gap-4">
                    <motion.span
                        className='text-4xl font-semibold text-white'
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        64
                    </motion.span>
                    <span className='bg-[#f73939] px-3 py-1 rounded-full text-sm font-semibold'>-8.5%</span>
                </div>
                <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <LuUsersRound className='bg-[#120b0b] rounded-full p-2 text-[35px] text-white' />
                </motion.div>
            </div>
            <motion.p
                className='w-[220px] mt-1 font-semibold text-gray-500'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Number of new clients
            </motion.p>
            <motion.button
                className='mt-3 text-sm font-semibold'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className='flex items-center gap-1 mt-5'>
                    <span className="text-[#baf562]">More detail</span>
                    <ArrowOutwardIcon sx={{ width: 20, height: 20, color: "#baf562" }} />
                </div>
            </motion.button>
        </motion.div>
    )
}

export default NumberofClients