import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Chip, IconButton, useTheme } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import Title from '../../layout/title';
import { tokens } from "../../../theme";
import { PatientProps } from '../module';
import GanttChartModal from '../../modals/GanttChartModal';



const Patient: PatientProps[] = [
    {
        id: '666d5c3df252432ec2e9085e', name: 'Nguyễn Hữ Lương', address: 'Thủ Đức', phone: '(665)121-5454',
        email: 'jonsnow@gmail.com', status: 'Đang điều trị',
        route: [
            { location: 'Thủ Đức', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'Bình Thạnh', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e9085f', name: 'Lê Thi Lan', address: 'Quận 1', phone: '(421)314-2288',
        email: 'cerseilannister@gmail.com', status: 'Đã hồi phục',
        route: [
            { location: 'Quận 2', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'quận 3', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e90860', name: 'Phạm Thị Ngu', address: 'tp Thủ Đức', phone: '(422)982-6739',
        email: 'jaimelannister@gmail.com', status: 'Đã hồi phục',
        route: [
            { location: 'Thủ Dầu 1', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'Thủ Đức', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e90861', name: 'Nguyễn Văn Tân', address: 'tp Thủ Đức', phone: '(921)425-6742',
        email: 'anyastark@gmail.com', status: 'Đã hồi phục',
        route: [
            { location: 'Quận 3', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'Quận 6', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e90863', name: 'Đỗ Van Tiến', address: 'tp Thủ Đức', phone: '(421)445-1189',
        email: 'daenerystargaryen@gmail.com', status: 'Đang điều trị',
        route: [
            { location: 'Tp Thủ Đức', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'Quận 1', startDate: '2022-01-11', endDate: '2022-01-20' },
            { location: 'Quận 5', startDate: '2022-01-8', endDate: '2022-01-20' },
            { location: 'Quận 3', startDate: '2022-02-3', endDate: '2022-02-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e90862', name: 'Trần Văn Kiên', address: 'tp Thủ Đức', phone: '(232)545-6483',
        email: 'evermelisandre@gmail.com', status: 'Đã hồi phục',
        route: [
            { location: 'Tp Thủ Đức', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'Quận 5', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e90863', name: 'Nguyễn Tấn Dũng', address: 'tp Thủ Đức', phone: '(543)124-0123',
        email: 'ferraraclifford@gmail.com', status: 'Đang điều trị',
        route: [
            { location: 'Quận 1', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'Thủ Dầu 1', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e90864', name: 'Nguyễn Văn Ngan', address: 'tp Thủ Đức', phone: '(222)444-5555',
        email: 'rossinifrances@gmail.com', status: 'Đã chết',
        route: [
            { location: 'Quận 3', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'TP Thủ Đức', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
    {
        id: '666d5c3df252432ec2e90865', name: 'Trần Thế Mĩ', address: 'tp Thủ Đức', phone: '(444)555-6239',
        email: 'harveyroxie@gmail.com', status: 'Đã chết',
        route: [
            { location: 'Quận 1', startDate: '2022-01-01', endDate: '2022-01-10' },
            { location: 'Quận 3', startDate: '2022-01-11', endDate: '2022-01-20' },
        ],
    },
];




const PatientList: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [patient, setPatient] = useState<PatientProps | null>(null);
    const [isOpen, setIsOpen] = useState(false)

    const handleViewDetails = (params: any) => {
        setIsOpen(true)
        setPatient(params.row);
    }

    const onClose = () => {
        setIsOpen(false)
    }

    const columns: GridColDef[] = [
        {
            field: 'actions',
            headerName: 'Hành động',
            width: 100,
            sortable: false,
            renderCell: (params: GridRenderCellParams<PatientProps>) => (
                <IconButton
                    color="primary"
                    aria-label="view details"
                    onClick={() => handleViewDetails(params)}
                >
                    <RemoveRedEyeIcon />
                </IconButton>
            )
        },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Tên', width: 200 },
        { field: 'address', headerName: 'Địa Chỉ', width: 200 },
        { field: 'phone', headerName: 'Số Điện Thoại', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        {
            field: 'status',
            headerName: 'Trạng Thái',
            width: 200,
            renderCell: (params: GridRenderCellParams<PatientProps>) => {
                let icon;
                let color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

                switch (params.value) {
                    case 'Đang điều trị':
                        icon = <HealingOutlinedIcon />;
                        color = 'info';
                        break;
                    case 'Đã hồi phục':
                        icon = <CheckCircleOutlineOutlinedIcon />;
                        color = 'success';
                        break;
                    case 'Đã chết':
                        icon = <HighlightOffOutlinedIcon />;
                        color = 'error';
                        break;
                    default:
                        icon = <AdminPanelSettingsOutlinedIcon />;
                        color = 'default';
                }
                return (
                    <Chip
                        icon={icon}
                        label={params.value}
                        color={color}
                    />
                );
            }
        }
    ];

    return (
        <Box m="20px">
            <Title title="PATIENT" subtitle="Danh Sách Bệnh Nhân Trong Hệ Thống" />
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
                <DataGrid checkboxSelection rows={Patient} columns={columns} />
                <GanttChartModal isOpen={isOpen} onClose={onClose} patient={patient} />
            </Box>
        </Box>
    );
};

export default PatientList;
