import { Box, Typography } from "@mui/material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from "../module";


const datas: data[] = [
    { name: 'Jan', treatment: 400, recovered: 240, deaths: 24 },
    { name: 'Feb', treatment: 300, recovered: 139, deaths: 21 },
    { name: 'Mar', treatment: 200, recovered: 980, deaths: 29 },
    { name: 'Apr', treatment: 278, recovered: 390, deaths: 20 },
    { name: 'May', treatment: 189, recovered: 480, deaths: 18 },
    { name: 'Jun', treatment: 239, recovered: 380, deaths: 25 },
    { name: 'Jul', treatment: 349, recovered: 430, deaths: 27 },
];

const StatisticalChart: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#273142', padding: 2, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Thống Kê
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={datas}>
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