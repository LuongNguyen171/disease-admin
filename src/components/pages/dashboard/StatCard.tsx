import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { StatCardProps } from "../module";


const StatCard: React.FC<StatCardProps> = ({ icon, title, value, percentage }) => {
    return (
        <Card sx={{ minWidth: '23%', backgroundColor: '#273142', color: '#ffffff' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ backgroundColor: '#1c2331' }}>{icon}</Avatar>
                    <Box>
                        <Typography variant="h5">{value}</Typography>
                        <Typography variant="subtitle1">{title}</Typography>
                    </Box>
                </Box>
                <Typography variant="subtitle2" sx={{ marginTop: 1, color: '#00e676' }}>
                    {percentage}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StatCard;