// NavBar.js
import React from 'react';
import {
    Toolbar,
    Typography,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
    CssBaseline,
    IconButton,
    ListItemButton
} from '@mui/material';
import {
    Home,
    Group,
    Menu as MenuIcon,
    PeopleAltOutlined,
    Equalizer,
    Settings,
    Notifications,
    Add
} from '@mui/icons-material';
import {
    Main,
    DrawerHeader,
    AvatarStyled,
    DrawerStyled,
    ListItemStyled,
    Title,
    Subtitle
} from './Styles';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const isActive = (path: string) => {
        return location.pathname === path;
    }

    return (
        <Main>
            <CssBaseline />

            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ marginRight: 2, color: '#ffffff' }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6" noWrap sx={{ color: '#ffffff' }}>
                    Adminis
                </Typography>
            </Toolbar>

            <DrawerStyled
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerToggle}>
                        <MenuIcon sx={{ color: '#ffffff' }} />
                    </IconButton>
                </DrawerHeader>
                <AvatarStyled alt="Ed Roh" src="/static/images/avatar/1.jpg" />
                <Title variant="h6">
                    Ed Roh
                </Title>
                <Subtitle variant="body2">
                    VP Fancy Admin
                </Subtitle>
                <Divider sx={{ backgroundColor: "#ffffff", opacity: '0.5', marginTop: 4 }} />
                <List sx={{ textAlign: 'start' }}>
                    <ListItemStyled disablePadding>
                        <ListItemButton onClick={() => navigate('/')}
                            selected={isActive('/')}
                        >
                            <ListItemIcon><Home sx={{ color: '#ffffff' }} /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItemStyled>
                    <Divider sx={{ backgroundColor: "#ffffff", opacity: '0.5', marginTop: 4 }} />
                    <Typography variant="caption" sx={{ color: '#ffffff', paddingLeft: 2 }}>Quản Lý</Typography>
                    <ListItemStyled disablePadding>
                        <ListItemButton onClick={() => navigate('/statistical')}
                            selected={isActive('/statistical')}>
                            <ListItemIcon><Equalizer sx={{ color: '#ffffff' }} /></ListItemIcon>
                            <ListItemText primary="Thống kê theo vùng" />
                        </ListItemButton>
                    </ListItemStyled>
                    <ListItemStyled disablePadding>
                        <ListItemButton onClick={() => navigate('/admin-list')}
                            selected={isActive('/admin-list')}
                        >
                            <ListItemIcon><Group sx={{ color: '#ffffff' }} /></ListItemIcon>
                            <ListItemText primary="Danh sách Admin" />
                        </ListItemButton>
                    </ListItemStyled>
                    <ListItemStyled disablePadding>
                        <ListItemButton onClick={() => navigate('/patient-list')}
                            selected={isActive('/patient-list')}>
                            <ListItemIcon><PeopleAltOutlined sx={{ color: '#ffffff' }} /></ListItemIcon>
                            <ListItemText primary="Danh sách bệnh nhân" />
                        </ListItemButton>
                    </ListItemStyled>

                    <Divider sx={{ backgroundColor: "#ffffff", opacity: '0.5', marginTop: 4 }} />
                    <Typography variant="caption" sx={{ paddingLeft: 2, color: '#ffffff' }}>Cài Đặt</Typography>
                    <ListItemStyled disablePadding>
                        <ListItemButton onClick={() => navigate('/admin-form')}
                            selected={isActive('/admin-form')}>
                            <ListItemIcon><Add sx={{ color: '#ffffff' }} /></ListItemIcon>
                            <ListItemText primary="Admin form" />
                        </ListItemButton>
                    </ListItemStyled>
                    <ListItemStyled disablePadding>
                        <ListItemButton>
                            <ListItemIcon><Settings sx={{ color: '#ffffff' }} /></ListItemIcon>
                            <ListItemText primary="Cấu hình" />
                        </ListItemButton>
                    </ListItemStyled>
                    <ListItemStyled disablePadding>
                        <ListItemButton>
                            <ListItemIcon><Notifications sx={{ color: '#ffffff' }} /></ListItemIcon>
                            <ListItemText primary="Thông báo" />
                        </ListItemButton>
                    </ListItemStyled>
                </List>
            </DrawerStyled>
        </Main>
    );
};

export default NavBar;
