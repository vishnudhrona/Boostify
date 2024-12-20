import { BarChart } from '@mui/x-charts/BarChart';
import { motion } from 'framer-motion';

const pData = [200, 400, 600, 800];
const xLabels = [
  'Accounting',
  'Customer Service',
  'Human Resources',
  'Purchase'
];

const Operatingepence = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className='box-item mt-2 ml-10 mb-10 h-[300px] rounded-lg'>
      <div className='flex justify-between px-5 py-5'>
        <motion.h3
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-white'
        >
          Operating expenses
        </motion.h3>
        <motion.span 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-[#baf562] text-xs'
        >
          Allow AI Implementation
          </motion.span>
      </div>
      <div className='pl-20'>
        <BarChart
          width={500}
          height={200}
          series={[
            { data: pData, label: 'pv', id: 'pvId', stack: 'total', color: '#baf562' },
          ]}
          xAxis={[{ data: xLabels, scaleType: 'band', tickLabelStyle: { fill: '#ffff', fontSize: 12 } }]}
          yAxis={[{
            tickLabelStyle: { fill: '#ffff' },
            axisLine: { stroke: 'transparent' },
          }]}
          legend={{ hidden: true }}
        />
      </div>
    </motion.div>
  )
}

export default Operatingepence