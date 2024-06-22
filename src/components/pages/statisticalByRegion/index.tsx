import React, { useEffect, useState } from 'react';
import PatientPieChart from './RegionPieChart';
import { Box, Button, TextField } from '@mui/material';
import Title from '../../layout/title';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/Store';
import { getTopLocations } from '../../../redux/reducer/User';


const Statistical = () => {

    const {

        topLocations
    } = useSelector((state: RootState) => state.User);
    const [locationQuantity, setLocationQuantity] = useState(4)
    const [inputValue, setInputValue] = useState('4');


    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTopLocations({ locationQuantity: locationQuantity }))
    }, [dispatch, locationQuantity])

    const handleButtonClick = () => {
        const value = parseInt(inputValue, 10);
        if (!isNaN(value)) {
            setLocationQuantity(value);
        }
    }

    return (

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
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button variant="contained" sx={{ marginTop: 4 }} onClick={handleButtonClick}>
                    Render
                </Button>
            </Box>
            <PatientPieChart data={topLocations} />
        </Box>
    )

};

export default Statistical;
