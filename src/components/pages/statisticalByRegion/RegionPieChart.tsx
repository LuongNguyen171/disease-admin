import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Cell, Tooltip, Legend,
} from 'recharts';
import { PatientPieChartProps, RegionPatientProps } from '../module';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/Store';
import { getTopLocations } from '../../../redux/reducer/User';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const PatientPieChart: React.FC<PatientPieChartProps> = ({ data }) => {


    const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (

        <PieChart width={windowDimensions.width} height={windowDimensions.height - 300}>
            <Pie
                data={data}
                cx={470}
                cy={200}
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="patients"
            >
                {
                    data?.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Tooltip />

            <Legend
                layout="vertical"
                align="center"
                verticalAlign="middle"
                payload={
                    data?.map((entry: any, index: any) => ({
                        id: entry.region,
                        type: 'square',
                        value: `${entry.region} (${entry.patients})`,
                        color: COLORS[index % COLORS.length],
                    }))
                }
            />

        </PieChart>

    )
};

export default PatientPieChart;
