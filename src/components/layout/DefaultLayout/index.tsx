import React, { ReactNode } from 'react';
import NavBar from '../navBar';
import './DefaultLayout.scss';
import Header from '../header';
import { ThemeProvider, createTheme } from '@mui/material/styles'; import { Box } from '@mui/material';
;

interface DefaultLayoutProps {
    children: ReactNode;
}
const theme = createTheme();

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box className='wrapper'>
                <Box className='nav-bar'>
                    <NavBar />
                </Box>
                <Box className='content'>
                    <Header />
                    <Box sx={{ marginTop: '24px' }}>{children}</Box>
                </Box>

            </Box>
        </ThemeProvider>
    );
}

export default DefaultLayout;
