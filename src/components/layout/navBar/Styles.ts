// styles.js
import { styled } from '@mui/system';
import { Avatar, Drawer, Typography, ListItem, Theme } from '@mui/material';

const drawerWidth = 250;

export const Main = styled('div')(({ theme }) => ({
    display: 'flex'
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: (theme as Theme).spacing(0, 1),
    ...(theme as Theme).mixins.toolbar,
    justifyContent: 'flex-end',

}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
    margin: '10px auto',
    width: theme.spacing(7),
    height: theme.spacing(7),
}));

export const DrawerStyled = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        backgroundColor: '#1c2331',
        color: '#ffffff',
    },
}));

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
    color: '#ffffff',
}));

export const Title = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    margin: '10px 0',
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: '#00e676',
}));
