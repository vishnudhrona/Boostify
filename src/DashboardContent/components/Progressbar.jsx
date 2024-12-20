import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Progressbar = ({ currentResult = 22567081, totalTarget = 31000000 }) => {
    const [progress, setProgress] = useState(0)

    const leftPath = totalTarget - currentResult

    const progressPercentage = (currentResult / totalTarget) * 100

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount)
    }

    useEffect(() => {
        setProgress(progressPercentage)
    }, [progressPercentage])
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="box-item ml-3 mt-5 rounded-lg w-[720px] h-[300px]"
        >
            <div className="flex justify-between px-5 py-5">
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-xl font-semibold"
                >
                    Corporate Year Plan
                </motion.h1>
                <div className='flex items-center gap-1'>
                    <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#baf562] text-xs"
                    >
                        More detail
                    </motion.span>
                    <ArrowOutwardIcon sx={{ width: 20, height: 15, color: "#baf562" }} />
                </div>
            </div>

            <div className=" flex px-5 ml-5 gap-2">
                <div>
                    <div className="text-lg text-[#baf562] mt-2">Current result</div>
                    <div className="text-[#baf562] text-2xl font-semibold">
                        {formatCurrency(currentResult)}
                    </div>
                    <div className="relative h-10 bg-zinc-800 mt-10 w-[350px] rounded-lg overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full rounded-lg transition-all duration-1000 ease-out"
                            style={{
                                width: `${progress}%`,
                                background: '#baf562'
                            }}
                        />
                    </div>
                </div>


                <div>
                    <div>
                        <div className="text-lg text-white mt-2">Left Path</div>
                        <div className="text-white text-2xl font-semibold">
                            {formatCurrency(leftPath)}
                        </div>
                        <div className="relative h-10 bg-zinc-800 mt-10 w-[200px] rounded-lg overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full rounded-lg transition-all duration-1000 ease-out"
                                style={{
                                    width: `${progress}%`,
                                    background: '#8c8c89'
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Progressbar