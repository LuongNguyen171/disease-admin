import React from 'react';
import PatientPieChart from './RegionPieChart';
import { Box, Button, TextField } from '@mui/material';
import Title from '../../layout/title';


const Statistical = () => (
    <Box>
        <Title title='THỐNG KÊ THEO KHU VỰC' />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', marginBottom: 2 }}>
            <TextField
                placeholder="Nhập số lượng khu vực…"
                variant="outlined"
                color="primary"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                }}
            />
            <Button variant="contained" sx={{ marginTop: 4 }}>
                Render
            </Button>
        </Box>
        <PatientPieChart />
    </Box>
);

export default Statistical;
