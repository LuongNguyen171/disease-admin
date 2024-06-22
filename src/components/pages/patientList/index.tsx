import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Chip, CircularProgress, IconButton, useTheme } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import Title from '../../layout/title';
import { tokens } from "../../../theme";
import { PatientProps } from '../module';
import GanttChartModal from '../../modals/GanttChartModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/Store';
import { getUserDisease } from '../../../redux/reducer/User';
import Patient from '../../../redux/data/patient-list';





const PatientList: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [patient, setPatient] = useState<PatientProps | null>(null);
    const [isOpen, setIsOpen] = useState(false)

    const { loadingGetUserDisease,
        successGetUserDisease,
        userDisease,
    } = useSelector((state: RootState) => state.User);

    const dispatch = useDispatch<AppDispatch>();



    useEffect(() => {
        dispatch(getUserDisease());
    }, [dispatch]);
    console.log("user desease: ", userDisease)

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

                {loadingGetUserDisease ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <CircularProgress size={80} thickness={4} />
                    </Box>
                ) : (
                    <>
                        <DataGrid checkboxSelection rows={Patient} columns={columns} />
                        <GanttChartModal isOpen={isOpen} onClose={onClose} patient={patient} />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default PatientList;
