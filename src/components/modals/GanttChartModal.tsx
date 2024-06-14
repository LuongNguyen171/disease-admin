import React, { useRef, useEffect } from 'react';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import { PatientProps } from '../pages/module';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import CloseIcon from '@mui/icons-material/Close';

interface GanttChartModalProps {
    patient: PatientProps | null;
    isOpen: boolean;
    onClose: () => void;
}

const GanttChartModal: React.FC<GanttChartModalProps> = ({ patient, isOpen, onClose }) => {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const formattedData = patient?.route?.map(visit => ({
        location: visit?.location,
        startDate: new Date(visit?.startDate).getTime(),
        endDate: new Date(visit?.endDate).getTime(),
    }));

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                ref={rootRef}
                p={2}
                sx={{
                    bgcolor: 'background.paper',
                    margin: 'auto',
                    width: '80%',
                    height: '70%',
                    position: 'relative',
                    top: '40%',
                    transform: 'translateY(-50%)',
                    borderRadius: '16px'
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box>
                    <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                        Thông tin lưu trú
                    </Typography>
                    <Typography >
                        Bệnh nhân : {patient?.name}
                    </Typography>
                </Box>
                <BarChart
                    width={1000}
                    height={400}
                    data={formattedData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        type="number"
                        domain={['auto', 'auto']}
                        tickFormatter={unixTime => new Date(unixTime).toLocaleDateString()}
                    />
                    <YAxis type="category" dataKey="location" />
                    <Tooltip labelFormatter={unixTime => new Date(unixTime).toLocaleDateString()} />
                    <Bar dataKey="endDate" fill="#8884d8">
                        <LabelList dataKey="location" position="right" />
                    </Bar>
                    <Bar dataKey="startDate" fill="#82ca9d" />
                </BarChart>
            </Box>
        </Modal>
    );
};

export default GanttChartModal;
