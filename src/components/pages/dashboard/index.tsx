// src/Dashboard.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SickIcon from '@mui/icons-material/Sick';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import StatCard from './StatCard';
import StatisticalChart from './StatisticalChart';
import InfectedList from './InfectedList';
import Header from '../../layout/title';
import { AppDispatch, RootState } from '../../../redux/store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserDisease } from '../../../redux/reducer/User';
import { Disease, StatisticalChartProps, Data } from '../module';
import axios from 'axios';


const Dashboard: React.FC = () => {

  const [total, setTotal] = useState(0);
  const [beingTreated, setBeingTreated] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deceased, seDeceased] = useState(0);

  const [beingTreatedPercent, setBeingTreatedPercent] = useState(0)
  const [recoveredPercent, setRecoveredPercent] = useState(0)
  const [deceasedPercent, setDeceasedPercent] = useState(0)
  const [chartData, setChartData] = useState<Data[]>([]);

  const { loadingGetAllUserDisease,
    allUserDisease,
  } = useSelector((state: RootState) => state.User);

  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(getAllUserDisease());
  }, [dispatch]);


  useEffect(() => {

    const data: Disease[] = allUserDisease || [];
    const total = data.length;
    const beingTreated = data.filter((disease: Disease) => disease.status === 0).length;
    const recovered = data.filter((disease: Disease) => disease.status === 1).length;
    const deceased = data.filter((disease: Disease) => disease.status === -1).length;

    setTotal(recovered)
    setBeingTreated(beingTreated)
    setRecovered(recovered)
    seDeceased(deceased)

    const beingTreatedPercent = total > 0 ? parseFloat(((beingTreated / total) * 100).toFixed(2)) : 0.00;
    const recoveredPercent = total > 0 ? parseFloat(((recovered / total) * 100).toFixed(2)) : 0.00;
    const deceasedPercent = total > 0 ? parseFloat(((deceased / total) * 100).toFixed(2)) : 0.00;

    setBeingTreatedPercent(beingTreatedPercent);
    setRecoveredPercent(recoveredPercent);
    setDeceasedPercent(deceasedPercent);

    const chartData: Data[] = [
      { name: 'Being Treated', treatment: beingTreated, recovered: 0, deaths: 0 },
      { name: 'Recovered', treatment: 0, recovered: recovered, deaths: 0 },
      { name: 'Deceased', treatment: 0, recovered: 0, deaths: deceased }
    ];

    setChartData(chartData)

  }, [dispatch, allUserDisease])





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

      {loadingGetAllUserDisease ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress size={80} thickness={4} />
        </Box>
      ) : (
        <>
          <Box sx={{ display: 'flex', gap: 4, marginBottom: 4 }}>
            <StatCard icon={<LocalHospitalIcon />} title="Tổng" value={total.toString()} percentage="+14%" />
            <StatCard icon={<SickIcon />} title="Đang Điều trị" value={beingTreated.toString()} percentage={`${beingTreatedPercent}%`} />
            <StatCard icon={<CheckCircleIcon />} title="Đã Khỏi" value={recovered.toString()} percentage={`${recoveredPercent}%`} />
            <StatCard icon={<PersonOffIcon />} title="Đã Chết" value={deceased.toString()} percentage={`${deceasedPercent}%`} />
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <StatisticalChart data={chartData} />
            <InfectedList />
          </Box>
        </>
      )}


    </Box>
  );
};


export default Dashboard;
