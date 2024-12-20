import { LineChart } from '@mui/x-charts/LineChart';
import { LuUsersRound } from "react-icons/lu";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

const CompanySalesTarget = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="box-item ml-3 mt-2 rounded-lg px-5 py-5"
        >
            <div className="flex justify-between">
                <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-lg">Company Sales target
                </motion.span>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-3 text-[#baf562] text-sm"
                >
                    <span>Year</span>
                    <span>Quarter</span>
                    <span>Month</span>
                    <span>Week</span>
                </motion.div>
            </div>

            <LineChart
                xAxis={[{
                    data: months,
                    scaleType: 'band'
                }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5, 10, 8, 10, 2,],
                        color: "#baf562"
                    },
                ]}
                width={500}
                height={300}
            />

            <div className='flex gap-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className='bg-[#030a03] rounded-lg px-5 py-5 mb-2'>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center gap-4">
                            <motion.span
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='text-lg font-semibold text-white'
                            >
                                $320,500.00
                            </motion.span>
                            <motion.span
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='bg-[#f73939] px-2 py-1 rounded-full text-xs font-semibold'
                            >
                                -8.5%
                            </motion.span>
                        </div>
                        <LuUsersRound className='bg-[#120b0b] rounded-full p-2 text-[35px] text-white' />
                    </div>
                    <motion.p
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='w-[220px] mt-1 font-semibold text-gray-500 text-sm'
                    >
                        Before AI Implementation
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='mt-3 text-sm font-semibold'
                    >
                        <div className='flex items-center gap-1 mt-5'>
                            <span className="text-[#baf562]">More detail</span>
                            <ArrowOutwardIcon sx={{ width: 20, height: 20, color: "#baf562" }} />
                        </div>
                    </motion.button>
                </motion.div>

                <div className='bg-[#030a03] rounded-lg px-5 py-5 mb-2'>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center gap-4">
                            <motion.span
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='text-lg font-semibold text-white'
                            >$480,500.00
                            </motion.span>
                            <motion.span
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='bg-[#baf562] px-2 py-1 rounded-full text-xs font-semibold'
                            >
                                +16.5%
                            </motion.span>
                        </div>
                        <LuUsersRound className='bg-[#120b0b] rounded-full p-2 text-[35px] text-white' />
                    </div>
                    <motion.p
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='w-[220px] mt-1 font-semibold text-gray-500 text-sm'
                    >
                        Before AI Implementation
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='mt-3 text-sm font-semibold'
                    >
                        <div className='flex items-center gap-1 mt-5'>
                            <span className="text-[#baf562]">More detail</span>
                            <ArrowOutwardIcon sx={{ width: 20, height: 20, color: "#baf562" }} />
                        </div>
                    </motion.button>
                </div>

            </div>


        </motion.div>
    )
}

export default CompanySalesTarget