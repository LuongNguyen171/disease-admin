import React from 'react';
import { Box } from '@mui/material';
import CreacteAdminForm from './CreacteAdminForm';
import Title from '../../layout/title';

const AdminForm = () => {
    return (
        <Box>
            <Title title='THÊM ADMIN' subtitle='Bạn Muốn Thêm Admin Mới?' />
            <CreacteAdminForm />
        </Box>
    );
};

export default AdminForm;
