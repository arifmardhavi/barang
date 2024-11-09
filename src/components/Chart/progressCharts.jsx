import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProgressCircle = ({ percentage }) => {
    const data = [
        { name: 'Progress', value: percentage },
        { name: 'Remaining', value: 100 - percentage }
    ];

    return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                        innerRadius={70}
                        outerRadius={80}
                        stroke="none"
                    >
                        <Cell key="progress" fill="#6d28d9" /> {/* Warna progress */}
                        <Cell key="remaining" fill="#E0E0E0" /> {/* Warna background */}
                    </Pie>
                    {/* Label di tengah yang menunjukkan persentase */}
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ fontSize: '24px', fill: '#6d28d9', fontWeight: 'bold' }}
                    >
                        {percentage}
                    </text>
                </PieChart>
            </ResponsiveContainer>
    );
};

export default ProgressCircle;
