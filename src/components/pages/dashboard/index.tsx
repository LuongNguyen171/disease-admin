// src/Dashboard.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SickIcon from '@mui/icons-material/Sick';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import StatCard from './StatCard';
import StatisticalChart from './StatisticalChart';
import InfectedList from './InfectedList';
import Header from '../../layout/title';


const Dashboard: React.FC = () => {
  return (
    <Box sx={{ padding: 2, color: '#ffffff', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'start', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Header title="DASHBOARD" subtitle="Welcome to dashboard" />
        </Box>
        <Button variant="contained" startIcon={<DownloadIcon />} sx={{ marginTop: 4 }}>
          Download Reports
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, marginBottom: 4 }}>
        <StatCard icon={<LocalHospitalIcon />} title="Tổng" value="12,361" percentage="+14%" />
        <StatCard icon={<SickIcon />} title="Đang Điều trị" value="431,225" percentage="+21%" />
        <StatCard icon={<CheckCircleIcon />} title="Đã Khỏi" value="32,441" percentage="+5%" />
        <StatCard icon={<PersonOffIcon />} title="Đã Chết" value="1,325,134" percentage="+43%" />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <StatisticalChart />
        <InfectedList />
      </Box>


    </Box>
  );
};


export default Dashboard;
