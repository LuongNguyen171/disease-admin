import { Box, Typography } from "@mui/material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { StatisticalChartProps } from "../module";



const StatisticalChart: React.FC<StatisticalChartProps> = ({ data }) => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#273142', padding: 2, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Thống Kê
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="treatment" stroke="#8884d8" name="Đang Điều trị" />
                    <Line type="monotone" dataKey="recovered" stroke="#82ca9d" name="Đã Phục Hồi" />
                    <Line type="monotone" dataKey="deaths" stroke="#ff4d4d" name="Đã chết" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default StatisticalChart;