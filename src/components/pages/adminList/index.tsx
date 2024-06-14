import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Chip, useTheme } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

import Title from '../../layout/title';
import { tokens } from "../../../theme";
import { TeamMemberProps } from '../module';



export const mockDataTeam: TeamMemberProps[] = [
    { id: 1, name: 'Jon Snow', address: 'tp Thủ Đức', phoneNumber: '(665)121-5454', email: 'jonsnow@gmail.com', accessLevel: 'admin' },
    { id: 2, name: 'Cersei Lannister', address: 'tp Thủ Đức', phoneNumber: '(421)314-2288', email: 'cerseilannister@gmail.com', accessLevel: 'admin' },
    { id: 3, name: 'Jaime Lannister', address: 'tp Thủ Đức', phoneNumber: '(422)982-6739', email: 'jaimelannister@gmail.com', accessLevel: 'admin' },
    { id: 4, name: 'Anya Stark', address: 'tp Thủ Đức', phoneNumber: '(921)425-6742', email: 'anyastark@gmail.com', accessLevel: 'admin' },
    { id: 5, name: 'Daenerys Targaryen', address: 'tp Thủ Đức', phoneNumber: '(421)445-1189', email: 'daenerystargaryen@gmail.com', accessLevel: 'admin' },
    { id: 6, name: 'Ever Melisandre', address: 'tp Thủ Đức', phoneNumber: '(232)545-6483', email: 'evermelisandre@gmail.com', accessLevel: 'admin' },
    { id: 7, name: 'Ferrara Clifford', address: 'tp Thủ Đức', phoneNumber: '(543)124-0123', email: 'ferraraclifford@gmail.com', accessLevel: 'admin' },
    { id: 8, name: 'Rossini Frances', address: 'tp Thủ Đức', phoneNumber: '(222)444-5555', email: 'rossinifrances@gmail.com', accessLevel: 'admin' },
    { id: 9, name: 'Harvey Roxie', address: 'tp Thủ Đức', phoneNumber: '(444)555-6239', email: 'harveyroxie@gmail.com', accessLevel: 'admin' },
];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Tên', width: 200 },
    { field: 'addresss', headerName: 'Địa Chỉ', width: 100 },
    { field: 'phoneNumber', headerName: 'Số Điện Thoại', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
        field: 'accessLevel',
        headerName: 'Access Level',
        width: 150,
        renderCell: (params: GridRenderCellParams<TeamMemberProps>) => (
            <Chip
                icon={<AdminPanelSettingsOutlinedIcon />}
                label={params.value}
                color='success'
            />
        ),
    },
];

const AdminList: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Title title="ADMIN" subtitle="Danh Sách Admin Trong Hệ Thống" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                width="70vw"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[500],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[500],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[300],
                        color: 'white',
                    },

                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
                        backgroundColor: `${colors.blueAccent[300]} !important`,
                        color: 'white',
                    },
                    "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": {
                        color: 'white',
                    }
                }}
            >
                <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    );
};

export default AdminList;
