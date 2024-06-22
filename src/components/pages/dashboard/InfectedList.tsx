import { Box, Typography } from "@mui/material";
import { Transaction } from "../module";

const transactions: Transaction[] = [
    { id: '0a123sb', city: 'TP.Hồ Chí Minh', date: '2024-06-23', total: 22 },
    { id: '01e4dsa', city: 'TP.Hồ Chí Minh', date: '2024-06-22', total: 20 },
    { id: '120s51a', city: 'TP.Hồ Chí Minh', date: '2019-06-21', total: 19 },
    { id: '0315dsaa', city: 'TP.Hồ Chí Minh', date: '2022-06-20', total: 15 }
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