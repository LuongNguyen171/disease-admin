import { Box, Typography } from "@mui/material";
import { Transaction } from "../module";

const transactions: Transaction[] = [
    { id: '0a123sb', city: 'TP.Hồ Chí Minh', date: '2022-11-02', total: 123 },
    { id: '01e4dsa', city: 'TP.Hồ Chí Minh', date: '2021-09-01', total: 123 },
    { id: '120s51a', city: 'TP.Hồ Chí Minh', date: '2019-04-15', total: 123 },
    { id: '0315dsaa', city: 'TP.Hồ Chí Minh', date: '2022-04-01', total: 123 }
];


const InfectedList: React.FC = () => {

    return (
        <Box sx={{ minWidth: 300, backgroundColor: '#273142', padding: 2, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Số Ca Nhiễm Gần Đây
            </Typography>
            {transactions.map((transaction) => (
                <Box key={transaction.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, borderBottom: '1px solid #333' }}>
                    <Box sx={{ textAlign: 'start' }}>
                        <Typography variant="body1">{transaction.city}</Typography>
                        <Typography variant="body2">Tổng : </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'start' }}>
                        <Typography variant="body2">{transaction.date}</Typography>
                        <Typography variant="body2" sx={{ color: '#00e676' }}>{transaction.total}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default InfectedList;