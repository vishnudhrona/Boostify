import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

const data = [
    { value: 80, label: 'Promoters', color: '#baf562' },
    { value: 10, label: 'Passives', color: '#503feb' },
    { value: 10, label: 'Detractors', color: '#f73939' },
];

const size = {
    width: 400,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: '#fff',
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

const CustomerSatisfaction = () => {
    return (
        <motion.div
            className='flex flex-col box-item w-[300px] mt-5 ml-2 px-5 py-5 rounded-lg w-[340px]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
        >
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-white px-5 py-5 text-xl font-semibold'
            >Customer Satisfaction</motion.h1>
            <div className=''>
                <PieChart
                    series={[{ data, innerRadius: 80 }]}
                    {...size}
                    legend={{ hidden: true }}
                >
                    <PieCenterLabel>$19530,50</PieCenterLabel>
                </PieChart>
            </div>
            <div className="mt-5 flex flex-col gap-3">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className='flex items-center gap-3'>
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-gray-700 font-medium text-white">{item.label}</span>
                        </div>

                        <div>
                            <span className='text-white'>{item.value}</span>
                        </div>

                    </div>
                ))}
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0a140a] text-[#baf562] py-2 px-5 mt-5 rounded"
            >
                More Detail <ArrowOutwardIcon />
            </motion.button>
        </motion.div>
    )
}

export default CustomerSatisfaction