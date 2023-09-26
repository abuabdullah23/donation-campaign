import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import { getStoredDonation } from '../../utils/localStorage';

const Statistics = () => {
    const allData = useLoaderData();
    const [donationData, setDonationData] = useState([]);

    useEffect(() => {
        const storedId = getStoredDonation();
        if (allData.length > 0) {
            const donatedData = allData.filter((d) => storedId.includes(d.id));
            setDonationData(donatedData)
        }
    }, [allData])

    const allDataLength = allData.length;
    const donatedDataLength = donationData.length;

    const donatePercent = (donatedDataLength / allDataLength) * 100;

    const data = [
        { name: 'not donated', value: 100 - donatePercent },
        { name: 'donated', value: donatePercent },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        if (percent > 0) {
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        }
    };

    return (
        <div className='my-16'>
            <div className='flex justify-center mb-8'>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

            <div className='flex justify-center'>
                <div className='flex flex-col gap-5 lg:flex-row lg:gap-12 items-center'>
                    <div className='flex items-center gap-3'>
                        <h3>Your Donation</h3>
                        <dive className='w-24 h-3 bg-[#00C49F] rounded-sm'></dive>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h3>Total Donation</h3>
                        <dive className='w-24 h-3 bg-[#FF444A] rounded-sm'></dive>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;